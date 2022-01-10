package com.javatrap2020.angular_app_with_java.controller;

import com.javatrap2020.angular_app_with_java.entity.Users;
import com.javatrap2020.angular_app_with_java.links.UserLinks;
import com.javatrap2020.angular_app_with_java.service.UsersService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/")
public class UsersController {
    @Autowired
    UsersService usersService;

    @GetMapping(path = UserLinks.LIST_USERS)
    public ResponseEntity<?> listUsers() {
        log.info("UserController: list users");
        List<Users> usersList = usersService.getUsers();
        return ResponseEntity.ok(usersList);
    }

    @PostMapping(path = UserLinks.ADD_USER)
    public ResponseEntity<?> saveUser(@RequestBody Users user) {
        log.info("UsersController: list users");
        Users resource = usersService.saveUser(user);
        return ResponseEntity.ok(resource);
    }

}

