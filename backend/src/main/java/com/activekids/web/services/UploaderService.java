package com.activekids.web.services;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.impl.client.HttpClients;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;


@Service
public class UploaderService {

    public String uploadImage(MultipartFile file) throws Exception {

        if (!file.isEmpty()) {
            String fileName = file.getOriginalFilename();
            byte[] bytes = file.getBytes();

            //Create directory
            File directory = createStoringDirectory();

            // Create the file on server
            File serverFile = createFile(directory.getAbsolutePath(), fileName, bytes);

            System.out.println("Server File Location=" + serverFile.getAbsolutePath());

            //return  serverFile.getAbsolutePath();

            //Upload image to imgur:
            String imageURL = this.UploadToImgur(file);

            return imageURL;
        }
        return null;
    }

    private String UploadToImgur(MultipartFile file) {
        String imageLink = null;
        String clientID = ""; //Hidden for security reasons
        String imgurUploadUrl = "https://api.imgur.com/3/image/";

        try {
            File convertedFile = this.convert(file);

            HttpClient httpclient = HttpClients.createDefault();
            HttpPost httppost = new HttpPost(imgurUploadUrl);

            httppost.addHeader("Authorization", "Client-ID " + clientID);

            // Request parameters and other properties.
            MultipartEntityBuilder reqEntity = MultipartEntityBuilder.create();
            reqEntity.setMode(HttpMultipartMode.BROWSER_COMPATIBLE);
            FileBody fileBody = new FileBody(convertedFile);
            reqEntity.addPart("image", fileBody);

            HttpEntity entity = reqEntity.build();

            httppost.setEntity(entity);

            //Execute and get the response.
            HttpResponse response = httpclient.execute(httppost);
            HttpEntity responseEntity = response.getEntity();

            if (responseEntity != null) {
                try (InputStream instream = responseEntity.getContent()) {
                    // do something useful
                    System.out.println("Imgur response:");
                    System.out.println(instream);
                    String serverResponse = fromStream(instream);
                    System.out.println(serverResponse);

                    JSONObject jsonObj = new JSONObject(serverResponse);

                    imageLink = jsonObj.getJSONObject("data").getString("link");
                    System.out.println(imageLink);
                }
            }
        } catch (Exception e) {
            System.out.println(e);
        }

        return imageLink;
    }

    private File createStoringDirectory() {
        String rootPath = System.getProperty("catalina.home");
        File directory = new File(rootPath + File.separator + "tmpFiles");
        if (!directory.exists()) {
            directory.mkdirs();
        }
        return directory;
    }

    private File createFile(String directory, String fileName, byte[] fileBytes) throws Exception {
        File serverFile = new File(directory + File.separator + fileName);
        BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
        stream.write(fileBytes);
        stream.close();
        return serverFile;
    }

    private File convert(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        convFile.createNewFile();
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }

    private String fromStream(InputStream in) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(in));
        StringBuilder out = new StringBuilder();
        String newLine = System.getProperty("line.separator");
        String line;
        while ((line = reader.readLine()) != null) {
            out.append(line);
            out.append(newLine);
        }
        return out.toString();
    }
}
