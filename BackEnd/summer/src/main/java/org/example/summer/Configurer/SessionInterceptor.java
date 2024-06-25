package org.example.summer.Configurer;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.io.IOException;
import org.springframework.http.HttpMethod;
@Component
public class SessionInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException, ServletException {
        if( HttpMethod.OPTIONS.matches(request.getMethod()))    // handle the preflight
        {
            return true ;
        }

        return true;
    }

}
