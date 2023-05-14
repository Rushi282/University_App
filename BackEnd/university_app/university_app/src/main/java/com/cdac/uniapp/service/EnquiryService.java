package com.cdac.uniapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.uniapp.dao.EnquiryRepo;
import com.cdac.uniapp.entity.Enquiry;

@Service
public class EnquiryService implements IEnquiryService{
	
	@Autowired
	private EnquiryRepo enquiryRepo;

	@Override
	public String addEnquiry(Enquiry enquiry) {
		Enquiry enquiry2 = enquiryRepo.save(enquiry);
		System.err.println(enquiry2.toString());
		if (enquiry2 != null) {
			return "Enquiry has been posted successfully.";
		}
		return "Failed to add enquiry";
	}
}
