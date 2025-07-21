import React from "react";
import "../../../assets/css/ActivePlan.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Payimg from "../../../assets/images/pyt-img.png";

const ActivePlanDetails = ({ plan }) => {
  return (
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-8 col-sm-6">
          <div class="row">
            <h2>Enterprise Plan Free</h2>
            <p>Built for agencies & large organizations hiring at scale.</p>
          </div>
          <div class="row">
            <p>
              {" "}
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
            </p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div className="card">
            <div className="paynt-details-btn  text-center p-2">
              <h2>Payment Details</h2>
            </div>
            <div className="pymt-mode">
              <p>Total Payment</p>
              <h3>₹2500</h3>
            </div>
            <div className="payment-img mt-3">
              <img src={Payimg} alt="payment-imges" className="img-fluid"></img>
            </div>
            <div className="payment-btn text-center">
             <Link to ="/AdminDashBoard"><Button className="pynt-btn rounded-pill">Pay Now</Button></Link> 
            </div>
          </div>
        </div>
        {/* <div class="col-md-4 col-sm-6">Payment</div> */}
      </div>
    </div>
  );
};

export default ActivePlanDetails;
