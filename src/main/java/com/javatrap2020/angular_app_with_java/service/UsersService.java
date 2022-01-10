package com.javatrap2020.angular_app_with_java.service;

import com.javatrap2020.angular_app_with_java.entity.Users;
import com.javatrap2020.angular_app_with_java.repository.UsersRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UsersService {
    private UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<Users> getUsers() {
        return usersRepository.findAll();
    }

    public Users saveUser(Users users) {
        return usersRepository.save(users);
    }

}
