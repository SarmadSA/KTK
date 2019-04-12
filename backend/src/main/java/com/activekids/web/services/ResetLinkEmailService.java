package com.activekids.web.services;

import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;

/**
 *
 * @author Liv Anne Nyland 11.apr.2019
 */
public class ResetLinkEmailService {
    

    public ResetLinkEmailService() {  
        
    }
    
    public void sendEmail(String email, String linkID, String name) {
        String to = email;
        String from = "web@gmail.com"; //TODO - Change e-mail address to one connected to the website
        String host = "localhost";
        String link = "thewebsitename.com/resetpassword/" + linkID; //TODO - Change domaine name when it's been decided.
        Properties properties = System.getProperties();
        properties.setProperty("mail.smtp.host", host);
        Session session = Session.getDefaultInstance(properties);

    
      try {
         MimeMessage message = new MimeMessage(session);
         message.setFrom(new InternetAddress(from));
         message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
         message.setSubject("User account password reset");
         message.setText("Dear " + name + "\n" + "\n" + "Someone has requested "
                 + "a password reset for your account on (insert website name)"
                 + "\n" + "\n" + "To reset password, click the link below.\n" 
                 + link + "\n" + "\n" + "If this was not you, ignore this "
                 + "e-mail."); //TODO - Insert website name where it is pointed out
         Transport.send(message);
         System.out.println("Sent message successfully....");
      } catch (MessagingException mex) {
         mex.printStackTrace();
      }
   }
}