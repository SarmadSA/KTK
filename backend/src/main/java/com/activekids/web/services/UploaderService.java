package com.activekids.web.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

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

            return  serverFile.getAbsolutePath();
        }
        return null;
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
}
