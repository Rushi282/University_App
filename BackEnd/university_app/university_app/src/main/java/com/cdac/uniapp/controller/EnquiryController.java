package com.cdac.uniapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.uniapp.entity.Enquiry;
import com.cdac.uniapp.service.IEnquiryService;

@RestController
@RequestMapping("/enquiry")
@CrossOrigin
public class EnquiryController {
	
	@Autowired
	private IEnquiryService enquiryService;
	
	@PostMapping("/add")
	public String postEnquiry(@RequestBody Enquiry enquiry) {
		return enquiryService.addEnquiry(enquiry);
	}
}
