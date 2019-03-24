package com.activekids.web.security.jwt;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.Date;

@Component
public class JwtService {

    public String createToken(String email, String secret, Date expireAt) {
        if(StringUtils.hasText(email) && StringUtils.hasText(secret) && expireAt != null && expireAt.after(new Date()) ) {
            String secret2 = new String(Base64.encodeBase64(secret.getBytes()));
            String compactJws = Jwts.builder()
                    .setSubject(email)
                    .signWith(SignatureAlgorithm.HS512, secret2)
                    .setExpiration(expireAt)
                    .compact();
            return compactJws;
        }
        return null;
    }

    public boolean isValid(String token, String secret) {
        if(StringUtils.hasText(token) && StringUtils.hasText(secret)) {
            try {
                String secret2 = new String(Base64.encodeBase64(secret.getBytes()));
                Jwts.parser().setSigningKey(secret2).parseClaimsJws(token);
                return true;
            } catch (JwtException e) {
                System.out.println(e.getMessage());
            }
        }
        return false;
    }

    public String getUsername(String token, String secret) {
        if(StringUtils.hasText(token) && StringUtils.hasText(secret)) {
            try {
                String secret2 = new String(Base64.encodeBase64(secret.getBytes()));
                return Jwts.parser().setSigningKey(secret2).parseClaimsJws(token).getBody().getSubject();
            }  catch (JwtException e) {
                System.out.println(e.getMessage());
            }
        }
        return null;
    }

}
