package com.activekids.web.config;

import com.activekids.web.repositories.UserRepository;
import com.activekids.web.security.AuthProviderService;
import com.activekids.web.security.filter.JwtAuthenticationTokenFilter;
import com.activekids.web.security.handler.AjaxAuthenticationFailureHandler;
import com.activekids.web.security.handler.AjaxAuthenticationSuccessHandler;
import com.activekids.web.security.handler.AjaxLogoutSuccessHandler;
import com.activekids.web.security.handler.Http401UnauthorizedEntryPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpMethod;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.session.SessionManagementFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableWebSecurity
@EnableJpaRepositories(basePackageClasses = UserRepository.class)
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{


    private AjaxAuthenticationSuccessHandler ajaxAuthenticationSuccessHandler;
    private AjaxAuthenticationFailureHandler ajaxAuthenticationFailureHandler;
    private AjaxLogoutSuccessHandler ajaxLogoutSuccessHandler;
    private Http401UnauthorizedEntryPoint authenticationEntryPoint;
    private JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter;
    private AuthProviderService authProvider;

    @Autowired
    public SecurityConfiguration(AjaxAuthenticationSuccessHandler ajaxAuthenticationSuccessHandler,
                                 AjaxAuthenticationFailureHandler ajaxAuthenticationFailureHandler,
                                 AjaxLogoutSuccessHandler ajaxLogoutSuccessHandler,
                                 Http401UnauthorizedEntryPoint authenticationEntryPoint,
                                 JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter,
                                 AuthProviderService authProvider) {

        this.ajaxAuthenticationSuccessHandler = ajaxAuthenticationSuccessHandler;
        this.ajaxAuthenticationFailureHandler = ajaxAuthenticationFailureHandler;
        this.ajaxLogoutSuccessHandler= ajaxLogoutSuccessHandler;
        this.authenticationEntryPoint = authenticationEntryPoint;
        this.jwtAuthenticationTokenFilter = jwtAuthenticationTokenFilter;
        this.authProvider = authProvider;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authProvider);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        //http.addFilterBefore(corsFilter(), SessionManagementFilter.class); //adds your custom CorsFilter
        http //TODO - remove this on production (enable csrf)
            .csrf().disable()
                .exceptionHandling().authenticationEntryPoint(authenticationEntryPoint).and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeRequests()
                    .antMatchers("/api/authentication").permitAll()
                    .antMatchers("/api/user").permitAll()
                    .antMatchers("/").permitAll()
                    .antMatchers("/user/add").permitAll()
                    .antMatchers("/listing/list").permitAll()
                    .antMatchers("/user/list").permitAll()
                    //.antMatchers("/address/list").hasAnyRole("ADMIN")
                    .anyRequest().authenticated()
                .and()
                    .formLogin()
                    .loginProcessingUrl("/api/authentication")
                    .successHandler(ajaxAuthenticationSuccessHandler)
                    .failureHandler(ajaxAuthenticationFailureHandler)
                    .usernameParameter("email")
                    .passwordParameter("password")
                .and()
                    .logout()
                    .logoutUrl("/api/logout")
                    .logoutSuccessHandler(ajaxLogoutSuccessHandler)
                    .invalidateHttpSession(true)
                    .deleteCookies("JSESSIONID");

        http.addFilterBefore(jwtAuthenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);
        http.headers().cacheControl();
        http.cors();
            //http.authorizeRequests()
            //        .antMatchers("**/address/**")
            //        .authenticated()
            //        .anyRequest()
            //        .permitAll()
            //        .and()
            //        .formLogin()
            //            .successHandler(successHandler())
            //            .failureHandler(failureHandler())
            //            .usernameParameter("email")
            //            .passwordParameter("password")
            //        .and()
            //            .exceptionHandling()
            //            .accessDeniedHandler(accessDeniedHandler())
            //            .authenticationEntryPoint(authenticationEntryPoint())
            //        .and()
            //        .logout()
            //        .logoutUrl("/logout")
            //        .permitAll();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("*"); //TODO - allow only authorized origins
            }
        };
    }

/*
    private PasswordEncoder getPasswordEncoder() {
        //return new BCryptPasswordEncoder();

        return new PasswordEncoder() {
            @Override
            public String encode(CharSequence charSequence) {
                return charSequence.toString();
            }

            @Override
            public boolean matches(CharSequence charSequence, String s) {
                return true;
            }
        };
    }
*/

/*
    private AuthenticationSuccessHandler successHandler() {
        return new AuthenticationSuccessHandler() {
            @Override
            public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
                //httpServletResponse.getWriter().append("OK");
                //httpServletResponse.setStatus(200);

                //HERE WE send session.
                //clearAuthenticationAttributes(request);
                HttpSession session = httpServletRequest.getSession();
                session.setAttribute("username", "c");
                httpServletResponse.addCookie(new Cookie("cookie-name", session.getId()));
                httpServletResponse.setStatus(HttpServletResponse.SC_OK);
                httpServletResponse.addHeader("fdsfjdslkjflksdj","lkdjfsdljfkljsdklfjsdklfj");

            }
        };
    }

    private AuthenticationFailureHandler failureHandler() {
        return new AuthenticationFailureHandler() {
            @Override
            public void onAuthenticationFailure(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
                httpServletResponse.getWriter().append("Authentication failure" + "\n");
                httpServletResponse.getWriter().append(e.getMessage());
                httpServletResponse.setStatus(401);
            }
        };
    }

    private AccessDeniedHandler accessDeniedHandler() {
        return new AccessDeniedHandler() {
            @Override
            public void handle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AccessDeniedException e) throws IOException, ServletException {
                httpServletResponse.getWriter().append("Access denied");
                httpServletResponse.setStatus(403);
            }
        };
    }

    private AuthenticationEntryPoint authenticationEntryPoint() {
        return new AuthenticationEntryPoint() {
            @Override
            public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
                httpServletResponse.getWriter().append("Not authenticated");
                httpServletResponse.setStatus(401);
            }
        };
    }*/

    //@Bean
    //public ShaPasswordEncoder sha() {
    //    ShaPasswordEncoder shaPasswordEncoder = new ShaPasswordEncoder(256);
    //    return shaPasswordEncoder;
    //}


    //@PreAuthorize("@employeeRepository.findOne(#id)?.manager?.name == authentication?.name")

    //@Bean
    //CorsFilter corsFilter() {
    //    CorsFilter filter = new CorsFilter();
    //    return filter;
    //}

    //@Bean
    //public CorsConfigurationSource corsConfigurationSource() {
    //    final CorsConfiguration configuration = new CorsConfiguration();
//
    //    List<String> allowedOrigins = new ArrayList<>();
    //    allowedOrigins.add("http://localhost:3000");
//
    //    configuration.setAllowedOrigins(allowedOrigins);
//
    //    List<String> allowedMethods = new ArrayList<>();
    //    allowedMethods.add("HEAD");
    //    allowedMethods.add("GET");
    //    allowedMethods.add("POST");
    //    allowedMethods.add("PUT");
    //    allowedMethods.add("DELETE");
    //    allowedMethods.add("PATCH");
//
    //    configuration.setAllowedMethods(allowedMethods);
    //    // setAllowCredentials(true) is important, otherwise:
    //    // The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.
    //    configuration.setAllowCredentials(true);
//
    //    List<String> allowedHeaders = new ArrayList<>();
    //    allowedHeaders.add("Authorization");
    //    allowedHeaders.add("Cache-Control");
    //    allowedHeaders.add("Content-Type");
//
    //    // setAllowedHeaders is important! Without it, OPTIONS preflight request
    //    // will fail with 403 Invalid CORS request
    //    configuration.setAllowedHeaders(allowedHeaders);
//
    //    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    //    source.registerCorsConfiguration("/**", configuration);
    //    return source;
    //}
}