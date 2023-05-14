package com.cdac.uniapp.entity;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Enquiry extends BaseEntity{
	private String name;
	private String email;
	private String message;
	private long contactNo;
}
