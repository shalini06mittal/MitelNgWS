package com.techgatha.blog.SpringBootBlogSecurityProject.security;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.techgatha.blog.SpringBootBlogSecurityProject.filters.JwtRequestFilter;
import com.techgatha.blog.SpringBootBlogSecurityProject.service.LoginUserService;



@EnableWebSecurity
public class JWTSecurityCOnfig  extends WebSecurityConfigurerAdapter{

	
	@Autowired
	private LoginUserService  myUserDetailsService;
	
	@Autowired
	private JwtRequestFilter reqFilter;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		System.out.println("configure");
		auth.userDetailsService(myUserDetailsService);
		
	}
	
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		// TODO Auto-generated method stub
		return super.authenticationManagerBean();
	}
	
	@Bean
	public PasswordEncoder passwordEncoder()
	{
	    
		//return  NoOpPasswordEncoder.getInstance();
		return new BCryptPasswordEncoder();
	}
	
	
//	 WebMvcConfigurer corsConfigurer() {
//	        return new WebMvcConfigurerAdapter() {
//	            @Override
//	            public void addCorsMappings(CorsRegistry registry) {
//	                registry.addMapping("/**")
//	                        .allowedMethods("*")
//	                        .allowedOrigins("http://localhost:4200");
//	            }
//	        };
//	    }
	

	
	private static final String[] AUTH_WHITELIST = {
	        "/v2/ap--docs",
	        "/swagger-resources",
	        "/swagger-resources/**",
	        "/configuration/ui",
	        "/swagger-ui.html",
	        "/v3/api-docs/**",
	        "/swagger-ui/**",
	        "/authenticate","/blogs/**","/signin"
	};
	@Override
	public void configure(WebSecurity web) throws Exception {
	    // TODO Auto-generated method stub
//	    super.configure(web);
	    web.ignoring().antMatchers(AUTH_WHITELIST);
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().authorizeRequests()
		.antMatchers(AUTH_WHITELIST).permitAll()
		.anyRequest().authenticated()
		.and()
        .exceptionHandling()
        .authenticationEntryPoint(
            (request, response, authException)
              -> response.sendError(
                  HttpServletResponse.SC_UNAUTHORIZED,
                  authException.getLocalizedMessage()
                )
        )
		.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		//// Add JWT token filter
		http.csrf().disable();
		http.addFilterBefore(reqFilter, UsernamePasswordAuthenticationFilter.class);
	}
}
