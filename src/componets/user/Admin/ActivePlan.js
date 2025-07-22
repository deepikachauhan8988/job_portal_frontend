import "../../../assets/css/ActivePlan.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";

const ActivePlan = ({ plan }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    admin: 18,                        // AdminDepartment ID
    plan_description: "Starter Plan",
    plan_price: 4999,
    Number_of_manager: 3,
    Number_of_employee: 3,
    Number_of_job_post: 5,
    plan_duratoin: "30 days",
    
  });

 const handleSubmit = async () => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api3/Planregistration/",
      formData
    );

    // ✅ Save returned admin_id to localStorage (if returned by backend)


    alert("Plan created successfully!");
       localStorage.setItem("plan_admin_id", formData.admin);
    navigate("/AdminLogin");
  } catch (error) {
    console.error("Error creating plan", error);
    alert("Failed to create plan.");
  }
};

  return (
    <div className="container p-sty">
      <div className="row mt-5">
        <div className="col-md-4 col-sm-6 d-flex">
          <div className="pricingTable card flex-fill">
            <div className="pricingTable-header">
              <i className="fa fa-adjust"></i>
              <div className="price-value">
                ₹4,999 <span className="month">$60 per month</span>
              </div>
            </div>
            <h3 className="heading">Starter Plan Free</h3>
            <p>
              Perfect for small businesses & startups
              <br />
              hiring occasionally.
            </p>
            <div className="pricing-content">
              <ul>
                <li>
                  <b>5 </b> Job Posts
                </li>
                <li>
                  <b>30</b> Days Listing Duration
                </li>
                <li>Standard Visibility in Search Results</li>
                <li>
                  Access to <b>100</b> Resumes (per job post)
                </li>
                <li>Basic Email Support</li>
              </ul>
            </div>
            <div className="pricingTable-signup">
              <Button onClick={handleSubmit} className="rounded-pill">
                Purchase Now
              </Button>
            </div>
          </div>
        </div>
         <div className="col-md-4 col-sm-6 d-flex">
          <div className="pricingTable green card flex-fill">
          <div className="pricingTable-header">
            <i className="fa fa-briefcase"></i>
          <div className="price-value">
                {" "}
                ₹14,999 <span class="month">$180 per month</span>{" "}
              </div>
            </div>
            <h3 class="heading">Growth Plan Free</h3>
            <p>
              For growing teams hiring regularly <br />
              across departments.
            </p>
            <div className="pricing-content">
              <ul>
                <li>
                  <b>25 </b> Job Posts
                </li>
                <li>
                  <b>60</b>Days Listing Duration
                </li>
                <li>Featured Listings (priority in search results)</li>
                <li>Access to 1000 Resumes</li>
                <li>Recruitment Analytics Dashboard</li>
                <li>Priority Email & Chat Support</li>
              </ul>
            </div>
            <div className="pricingTable-signup">
              <a href="#">Purchase Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 d-flex">
          <div className="pricingTable blue flex-fill">
            <div className="pricingTable-header">
              <i className="fa fa-diamond"></i>
              <div className="price-value">
                {" "}
                ₹2500<span className="month">per month</span>{" "}
              </div>
            </div>
            <h3 class="heading">Enterprise Plan Free</h3>
            <p>
              Built for agencies & large organizations <br />
              hiring at scale.
            </p>
            <div class="pricing-content">
              <ul>
                <li>Unlimited Job Posts</li>
                <li>
                  <b>90</b> Days Listing Duration
                </li>

                <li>Full Resume Database Access</li>
                <li>Branded Company Page</li>
                <li>API Access for ATS/HRMS Integration</li>
                <li>Dedicated Account Manager & Custom Solutions</li>
                <li>Custom Pricing (Request Quote)</li>
              </ul>
            </div>
            <div class="pricingTable-signup">
              <Link to="/ActivePlanDetails">Purchase Now</Link>
            </div>
          </div>
        </div>

        {/* <div className="col-md-4 col-sm-6">Payment</div> */}
      </div>
    </div>
  );
};

export default ActivePlan;
