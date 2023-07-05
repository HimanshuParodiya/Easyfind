import React from "react";
import "./Service.css";
import {TbTruckDelivery } from "react-icons/tb";
import { FcApproval, FcCustomerSupport } from "react-icons/fc";
import { MdCalendarMonth } from "react-icons/md";
import { BiShieldQuarter } from "react-icons/bi";
import GoToTop from "../../utils/GoToTop";
import ServicePageData from "./ServicePageData/ServicePageData";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import QNA from "./QNA/QNA";


const Service = () => {
  return (
    <div className="service_container">
     <ServiceBanner />
    <div className="servicePoints_container">
      <ServicePageData
        icon={<TbTruckDelivery   className="service_icon deliveryIcon "/>}
        sNo="01"
        content="row"
        divider="right"
        description=" Quick and efficient shipping or transportation of goods, ensuring prompt and timely arrival at the desired destination."
        descriptionAnimation="500"
      />
      <ServicePageData
        icon={<FcCustomerSupport className="service_icon cutomerSupportIcon " />}
        sNo="02"
        content="row-reverse"
        divider="left"
        description="Round-the-clock assistance and service provided to customers, available at any time, day or night, to address inquiries, resolve issues, and provide guidance and support."
        descriptionAnimation="-500"

      />
       <ServicePageData
        icon={<FcApproval className="service_icon approvalIcon " />}
        sNo="03"
        content="row"
        divider="right"
        description="High-quality and authorized items that have undergone thorough evaluation, verification, and compliance with relevant standards, ensuring reliability, safety, and adherence to industry regulations."
        descriptionAnimation="500"

      />
      <ServicePageData
        icon={<MdCalendarMonth className="service_icon calendarIcon " />}
        sNo="04"
        content="row-reverse"
        divider="left"
        description="Uninterrupted access to a retail establishment or online store throughout an entire month, enabling customers to shop at their convenience, explore a wide range of products, and make purchases at any time during the month."
        descriptionAnimation="-500"

      />
      <ServicePageData
        icon={<BiShieldQuarter className="service_icon shieldIcon " />}
        sNo="05"
        content="row"
        divider="right"
        description="Secure your important or fragile packages to retrieve the value in case of loss or damage done during delivery."
        descriptionAnimation="500"

      />
    </div>
     <QNA />
      <GoToTop />
    </div>
  );
};

export default Service;
