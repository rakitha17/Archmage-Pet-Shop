import Image from "next/image";
import style from './aboutus.module.scss'
import Image26 from './../../images/about-us page/26.png'
import Image27 from './../../images/about-us page/27.png'
import Image28 from './../../images/about-us page/28.png'
import { BreadCrumbComponent } from "@/components/Breadcrumb/breadcrumb";
import { HeroBannerComponent } from "@/components/HeroBanner/herobanner";
import { NewsLetterComponent } from "@/components/NewsLetter/newsletter";



 
export default function Home() {
  return (
    <div>
      {/* <HeroBannerComponent/> */}
      <BreadCrumbComponent/>
      <div className="section py-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3">
              <Image
                  src={Image26}
                  alt="furry-cat"
                  layout="responsive"
                  width={300} // Adjust these values based on your image size
                  height={400} // Adjust these values based on your image size
                  className="img-fluid"
                />
            </div>        
            <div className="col-6 col-md-3">
              <Image
                    src={Image27}
                    alt="furry-cat"
                    layout="responsive"
                    width={300} // Adjust these values based on your image size
                    height={400} // Adjust these values based on your image size
                    className="img-fluid"
                  />
            </div>   
            <div className="col-12 col-md-6 text-start my-md-auto pt-5 ps-md-5">
                <h2 className={style.FurryHead}>Welcome to Our Pet Shop</h2>
                <p className='py-3'>At Our Pet Shop, we believe that pets are not just animals; they are beloved members of our families. Our passion for animals and commitment to their well-being drive everything we do.</p>
                <h3 className={style.OurMi}>Our Mission</h3>
                <p className='py-3'>Our mission is simple - to enhance the well-being of pets and strengthen the bond between animals and their owners. We strive to be a trusted resource for pet owners, offering a wide range of high-quality products, expert advice, and a welcoming environment for both pets and their humans.</p>
            </div>
          </div>     
        </div>
      </div>

      <div className="section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="">
                <h1 className="ourPretShop pb-4">Why Choose Our Pet Shop?</h1>
              </div>
            </div>
          </div>
          <div className="">
          <Image
            src={Image28}
            alt="furry-cat"
            layout="responsive"
            width={300} // Adjust these values based on your image size
            height={400} // Adjust these values based on your image size
            className="img-fluid d-md-none pb-4" 
            />
          </div>
          <div className="row">
            <div className="col-12 col-md-4 text-center text-md-end d-flex align-items-center">
              <div className="">
                <h4 className={`${style.Expertise}`}>Expertise</h4>
                <p className="pb-md-5 ">Our knowledgeable and friendly staff are here to assist you. From nutrition to grooming, we have the expertise to help you make informed decisions for your pet’s care.</p>

                <h4 className={`${style.Expertise}`}>Community Involvement</h4>
                <p className="">We believe in giving back to the community. Our Pet Shop actively supports local animal shelters and initiatives aimed at improving the lives of pets in need.</p>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center text-md-end">
              <div className="image">
                <Image
                  src={Image28}
                  alt="furry-cat"
                  layout="responsive"
                  width={300} // Adjust these values based on your image size
                  height={400} // Adjust these values based on your image size
                  className="img-fluid d-none d-md-block"
                />
              </div>
            </div>
            <div className="col-12 col-md-4 text-center text-md-start d-flex align-items-center">
              <div className="">
                <h4 className={`${style.Expertise}`}>Quality Products</h4>
                <p className="pb-md-5 ">We carefully curate our selection of products, focusing on quality, durability, and pet safety. Whether it’s premium pet food, stylish accessories, or innovative toys.</p>

                <h4 className={`${style.Expertise}`}>Customer Satisfaction</h4>
                <p className="">Your satisfaction is our top priority. We are committed to providing excellent customer service, ensuring that you and your pet have a positive experience every time you visit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetterComponent/>






    </div>
  );
}