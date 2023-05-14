package com.cdac.uniapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.uniapp.entity.Enquiry;

public interface EnquiryRepo extends JpaRepository<Enquiry, Integer>{

	
}
