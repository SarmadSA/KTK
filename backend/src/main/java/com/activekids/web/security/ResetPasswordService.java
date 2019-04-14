package com.activekids.web.security;

import com.activekids.web.model.User;
import com.activekids.web.repositories.UserRepository;
import com.activekids.web.services.ResetLinkEmailService;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author Liv Anne Nyland 02.apr.2019
 */
public class ResetPasswordService {
    private final UserRepository userRepository;
    private Random rand;
    private User user;
    private ResetLinkEmailService resetEmail;
    
    @Autowired
    public ResetPasswordService(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.rand = new Random();
        this.resetEmail = new ResetLinkEmailService();
    }
    
    public void sendLink(String email) {
        if(userExist(email)) {
            String linkID = generateLinkID();
            user = userRepository.getUserByEmail(email);
            user.setResetPasswordLink(linkID);
            String userName = user.getFirstName() + " " + user.getLastName();
            resetEmail.sendEmail(email, linkID, userName);
        }
    }
    
    public void resetPassword(String email, String newPassword, String linkID) {
        user = userRepository.getUserByEmail(email);
        if(userExist(email) && (user.getResetPasswordLink().equals(linkID))) {
            user.setPassword(newPassword);
            user.setResetPasswordLink(null);
        }
    }
    
    private boolean userExist(String email) {
        boolean exists = false;

        if(userRepository.findByEmail(email).isPresent()){
            exists = true;
        }
        return exists;
    }
    
    private String generateLinkID() {
        String linkID = null;
        for(int i = 0; i < 8; i++) {
            int randNum = rand.nextInt(26);
            int randCharCase = rand.nextInt(2);
            String nextLetter = getCharForNumber(randNum);
            if(randCharCase == 1) {
                nextLetter = nextLetter.toLowerCase();
            }
            linkID = linkID + nextLetter;
        }
        return linkID;
    }
    
    private String getCharForNumber(int i) {
        char[] alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toCharArray();
        if (i > 25) {
            return null;
        }
        return Character.toString(alphabet[i]);
    }
}
