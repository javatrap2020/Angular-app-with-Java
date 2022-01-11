package com.javatrap2020.angular_app_with_java.repository;

import com.javatrap2020.angular_app_with_java.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UsersRepository extends JpaRepository<Users, Long>, JpaSpecificationExecutor<Users>{
}
