"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BreadCrumbComponent } from '@/components/Breadcrumb/breadcrumb'
import { NewsLetterComponent } from '@/components/NewsLetter/newsletter'
import React from 'react'
import style from './termsandcondition.module.scss'
import { HeroBannerComponent } from '@/components/HeroBanner/herobanner'

export default function page() {
  return (
    <div>

        <HeroBannerComponent/>
        <BreadCrumbComponent/>
        <div className="section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4 className={`heading ${style.heading}`}>Welcome to Our Pet Shop!</h4>
                        <p className={`para ${style.para}`}>These terms and conditions outline the rules and regulations for the use of Our Pet Shop Website. <br />
                         By accessing this website, we assume you accept these terms and conditions. Do not continue to use Our Pet Shop if you do not agree to take all of the terms and conditions stated on this page. 
                         
                         
                         <h4 className={`heading ${style.heading}`}>Terminology:</h4>
                         <p className={`para ${style.para}`}> The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements: <br />
                         
                          The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements: “Client,” “You,” and “Your” refers to you, the person logging on to this website and compliant with the Company’s terms and conditions. “The Company,” “Ourselves,” “We,” “Our,” and “Us,” refers to our Company. “Party,” “Parties,” or “Us,” refers to both the Client and ourselves. Cookies: <br /> We employ the use of cookies. By accessing Our Pet Shop, you agreed to use cookies in agreement with the Our Pet Shop’s Privacy Policy. </p>
                          
                        <h4 className={`heading ${style.heading}`}>License:</h4>
                        <p className={`para ${style.para}`}>Unless otherwise stated, Our Pet Shop and/or its licensors own the intellectual property rights for all material on Our Pet Shop. All intellectual property rights are reserved. You may access this from Our Pet Shop for your own personal use subjected to restrictions set in these terms and conditions. </p>
                        
                        
                        <h4 className={`heading ${style.heading}`}>You must not:</h4>
                        <p className={`para ${style.para}`}>Republish material from Our Pet Shop Sell, rent, or sub-license material from Our Pet Shop Reproduce, duplicate, or copy material from Our Pet Shop Redistribute content from Our Pet Shop</p>




                        <h4 className={`heading ${style.heading}`}>User Comments:</h4>
                        <p className={`para ${style.para}`}>
                           This Agreement shall begin on the date hereof. Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Our Pet <br />
                            Shop does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Our Pet Shop, its agents, or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Our Pet Shop shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
                            
                            <h4 className={`heading ${style.heading}`}>Content Liability:</h4> 
                            <p className={`para ${style.para}`}>We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third- party rights.</p>

                            <h4 className={`heading ${style.heading}`}>Reservation of Rights:</h4>
                            <p className={`para ${style.para}`}>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

                            <h4 className={`heading ${style.heading}`}> Removal of links from our website:</h4>
                            <p className={`para ${style.para}`}>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>

                            <h4 className={`heading ${style.heading}`}>Disclaimer:</h4>
                            <p className={`para ${style.para}`}>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will: <br />Limit or exclude our or your liability for death or personal injury; Limit or exclude our or your liability for fraud or fraudulent misrepresentation; Limit any of our or your liabilities in any way that is not permitted under applicable law; or Exclude any of our or your liabilities that may not be excluded under applicable law. The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty. <br /> As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
                            </p>

                            
                    
                    </div>
                </div>
            </div>
        </div>
        <NewsLetterComponent/>
    </div>
  )
}
