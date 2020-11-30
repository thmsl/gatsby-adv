---
title: 'Cryptography for COVID-19 &#8211; How Privacy Can be Enabled for Pandemic Contact Tracing'
date: '2020-06-14T18:38:11+01:00'
status: publish
permalink: /2020/06/14/cryptography-for-covid-19-how-privacy-can-be-enabled-for-pandemic-contact-tracing
author: 'Matthew Warner'
excerpt: ''
type: post
id: 7290
thumbnail: ../../../../../uploads/2018/10/BIL-150x150.jpg
category:
    - Blog
tag:
    - BIL
    - 'Blockpass Identity Lab'
    - Compliance
    - conronavirus
    - 'Contact Tracing'
    - 'contact tracking'
    - 'contact tracking covid'
    - Coronavirus
    - 'covid tracking'
    - COVID-19
    - 'Covid-19 relief'
    - Covid19
    - Cryptography
    - 'digital identity'
    - 'Edinburgh Napier University'
    - 'health certificate'
    - Healthcare
    - 'Homomorphic Encryption'
    - Identity
    - 'identity certificate'
    - 'Know your customer'
    - KYC
    - pandemic
    - Privacy
    - 'relieve covid 19'
    - Security
    - 'Zero-Knowledge Proofs'
    - ZKP
post_format: []
language:
    - English
post_translations: []
ogtitle:
    - 'Cryptography for COVID-19 - How Privacy Can be Enabled for Pandemic Contact Tracing'
ogdescription:
    - 'Though many countries around the world are still in the midst of lockdown to mitigate the spread of transmission of the coronavirus COVID-19 pandemic, some are beginning to emerge from isolation and look to resume a more normal state as they seek to get the economy and social experiences up and running. However, as has been seen in some countries, easing lockdown measures too early has led to a resurgence of new cases and worries that a second wave may hit. Despite the risks, many are seeking ways to work around the issues at hand, and for many the answer seems to be monitoring and tracking of those who develop symptoms and the ability to warn those they may have had contact with - ‘contact tracing’. '
ogimage:
    - '1436'
custom_image:
    - 'Yes'
text_lines:
    - '1'
og_image_opacity:
    - '100'
og_image_line_1_text: ''
og_image_line_2_text: ''
og_image_line_3_text: ''
header_image:
    - ''
intro: 'Though many countries around the world are still in the midst of lockdown to mitigate the spread of transmission of the coronavirus COVID-19 pandemic, some are beginning to emerge from isolation and look to resume a more normal state as they seek to get the economy and social experiences up and running. However, as has been seen in some countries, easing lockdown measures too early has led to a resurgence of new cases and worries that a second wave may hit. Despite the risks, many are seeking ways to work around the issues at hand, and for many the answer seems to be monitoring and tracking of those who develop symptoms and the ability to warn those they may have had contact with - ‘contact tracing’. '
text: "<span style=\"font-weight: 400;\">Obviously, there are issues with this approach as many worry about who would be in control of this solution and the huge potential privacy concerns that this data might engender. Alongside this, it has been reported in some places that people who worry they might have the virus keep the information quiet as they do not want to be seen or judged negatively. Any solution that could be accepted would not only need to deal with the privacy issues raised, but also ensure that those using the system had the confidence to report their symptoms and results accurately and without fear of reprisal. In order to do this, a cryptographically-secure and privacy-centric solution would need to be implemented, and it would need to be one that was simple to use and accessible to all.\_</span>\r\n\r\n<span style=\"font-weight: 400;\">Research into these possibilities is exactly what has been going on at Edinburgh Napier University. A paper has been worked on recently, carried out in conjunction with the<a href=\"https://identity-lab.blockpass.org/\"> Blockpass Identity Lab</a> - a research lab set up as a collaboration between Blockpass and Edinburgh Napier University - which looks into how privacy and security standards can be met in a pandemic-tracking system. “PAN-DOMAIN: Privacy-preserving Sharing and Auditing of <a href=\"https://www.blockpass.org/2020/04/17/kyc-digital-certificate-service-for-covid-19-testing/\">COVID-19</a> Infection Identity Matching” was written by Will Abramson, Professor Bill Buchanan, and Owen Lo. It is expected to be available, along with other articles from the authors and the Blockpass Identity Lab, on ResearchGate in the near future.</span>\r\n\r\n<span style=\"font-weight: 400;\">The research paper describes how digital contact tracing can be used, with people having unique ID codes which can be used with mobile devices and Bluetooth networks to monitor and track the individual’s location, enabling a system which can connect with and report to other devices that come within a set radius. With this data, a person who tests positive for COVID-19 can then update their app, prompting the system to notify people that are logged as having passed close to the device’s owner that they are at risk and need to be tested themselves. The paper notes that Apple and Google have worked together to create a Bluetooth-tracking API, and that PAN-DOMAIN has posited a solution to link this with pandemic contact tracing in such a manner that only verified testing centres can initiate the health warning, preventing misuse by people seeking to cause trouble with the system.\_</span>\r\n\r\n<span style=\"font-weight: 400;\">Where the novel approach taken by this paper comes in, is in a method to create pseudonyms for users which would ensure privacy could be met at the highest level and allow users to be represented across a multitude of services whilst simultaneously preventing different services from accessing information they are not entitled to see or misusing the data. As the paper states, its purpose is to “outline a concrete and realistic example of this cryptography applied to pandemic tracing”. This would put the user in control of their own data, including giving them the ability to audit who has been requesting their data, whilst still allowing for multiple agencies to gain access to the information they need to function and help prevent the spread of pandemics. The possibility exists, the paper explains, to completely anonymise the user from the fact that they are or are not infected; there is no need for a person to know </span><i><span style=\"font-weight: 400;\">who</span></i><span style=\"font-weight: 400;\"> they might have been infected by, just whether they are at risk and need to get checked. This possibility can be made a reality by the use of advanced cryptographic techniques such as homomorphic encryption and zero-knowledge proofs.\_</span>\r\n\r\n<span style=\"font-weight: 400;\">Building on algorithms previously developed, the paper examines how a healthcare organisation could build out a contact tracing app. This covers the various steps to set up the system, how people could download and register for the app, how the contact tracing would work and how the system would process the various states that the different actors in the system would go through as the process took place. The end result of this is a process where verified health centres can authenticate, monitor and notify the individuals in the system without compromising privacy and only with users’ consent. Not only would this benefit the user, with greater control over their personal information, but would bring peace of mind to healthcare organisations as it would remove the necessity and worry of storing large amounts of sensitive information.\_\_</span>\r\n\r\n<span style=\"font-weight: 400;\">From this, the paper goes on to look into the ability to audit those who are seeking to process their data, and how the solution could be applied on a large scale, such as with the <a href=\"https://www.blockpass.org/2020/04/22/using-blockpass-for-covid-19-test-certification-and-legal-work/\">COVID-19</a> pandemic. In the paper, the authors also detail the scale of the problem, along with the similarities and differences of the issue in various different countries. In this instance, the paper is looking specifically at utilising these methods and cryptography for pandemic contact tracing solutions but the authors note that there are wider implications for this type of technology. Those who have an interest in the mathematics behind this and the specifics of how the solutions could be implemented and would work can find the details in the paper when it is made available.\_</span>\r\n\r\n<span style=\"font-weight: 400;\">When <a href=\"http://www.blockpass.org\">Blockpass</a> and Edinburgh Napier University partnered to launch the <a href=\"https://identity-lab.blockpass.org/\">Blockpass Identity Lab</a> in September 2018, this kind of privacy-preserving and problem-solving solution was exactly the kind of work that was the focus for research and development. The peerless cryptographic skills and privacy-centric ideals of the students and professors working for the University and the Lab were precisely the ideals that Blockpass sought to partner with to improve the potential of the Blockpass Mobile App and <a href=\"http://www.blockpass.org/kyc\">KYC Connect solutions</a>, as well as future developments, as Blockpass strives to make identity fast, simple and painless without compromising security or privacy. Developments such as the research that is coming from the Blockpass Identity Lab will enable Blockpass to provide the best possible identity management solutions whilst maintaining the highest standards of regulatory compliance and data privacy, putting the user at the centre, in control of their own data.\_</span>\r\n\r\n<span style=\"font-weight: 400;\">To find out more about the Blockpass Identity Lab, click </span><a href=\"https://identity-lab.blockpass.org/\"><span style=\"font-weight: 400;\">here</span></a><span style=\"font-weight: 400;\">. To find out how Blockpass is looking to assist in tackling this COVID-19 pandemic, click </span><a href=\"https://www.blockpass.org/2020/04/17/kyc-digital-certificate-service-for-covid-19-testing/\"><span style=\"font-weight: 400;\">here</span></a><span style=\"font-weight: 400;\">. The Blockpass platform is fully automated and hosted in the cloud, with no integration or setup fee. Businesses can sign up to the </span><a href=\"https://www.blockpass.org/kyc\"><span style=\"font-weight: 400;\">KYC Connect</span></a><span style=\"font-weight: 400;\"> console in a matter of minutes, test out the service, and start conducting identity documents verification, </span><a href=\"https://www.blockpass.org/kyc\"><span style=\"font-weight: 400;\">KYC </span></a><span style=\"font-weight: 400;\">and </span><a href=\"https://www.blockpass.org/2019/10/21/understanding-aml-compliance/\"><span style=\"font-weight: 400;\">AML </span></a><span style=\"font-weight: 400;\">checks. Sign up for FREE at </span><a href=\"http://console.blockpass.org/\"><span style=\"font-weight: 400;\">console.blockpass.org</span></a><span style=\"font-weight: 400;\">.</span>"
media_page_text: 'Blockpass Identity Lab has released a research paper describes how digital contact tracing can be used, with people having unique ID codes which can be used with mobile devices and Bluetooth networks to monitor and track the individual’s location, enabling a system which can connect with and report to other devices that come within a set radius. By creating this novel approach, users can update their health conditions within app,  and let other users know whether they are logged as having passed close to the device’s owner that they are at risk and need to be tested themselves.  This approach creates pseudonyms for users which would ensure privacy could be met at the highest level and allow users to be represented across a multitude of services whilst simultaneously preventing different services from accessing information they are not entitled to see or misusing the data.  Read more!'
pinned:
    - 'no'
metatitle:
    - 'Cryptography for COVID-19 - How Privacy Can be Enabled for Pandemic Contact Tracing'
metadescription:
    - 'Blockpass Identity Lab has released a research paper describes how digital contact tracing can be used, with people having unique ID codes which can be used with mobile devices and Bluetooth networks to monitor and track the individual’s location, enabling a system which can connect with and report to other devices that come within a set radius. By creating this novel approach, users can update their health conditions within app,  and let other users know whether they are logged as having passed close to the device’s owner that they are at risk and need to be tested themselves.  This approach creates pseudonyms for users which would ensure privacy could be met at the highest level and allow users to be represented across a multitude of services whilst simultaneously preventing different services from accessing information they are not entitled to see or misusing the data.  Read more!'
metakeywords:
    - 'KYC, Identity, Compliance, Cryptography, COVID-19, Coronavirus, Pandemic, healthcare, Privacy, Security, Homomorphic Encryption, Zero-Knowledge Proofs, ZKP, Contact Tracing, BIL, Blockpass Identity Lab, Edinburgh Napier University, covid19, covid 19, pandemic, know your customer, contact tracking, privacy, covid tracking, conronavirus, digital identity, identity certificate, health certificate, relieve covid 19, covid 19 relief, contact tracking covid'
---
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<?xml encoding="UTF-8">
