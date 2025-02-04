import {useState,useEffect} from 'react'
import './Mainpage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Mainpage = () => {
    const prjct1imgs=
    [
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/traveller-heropage.png",
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/traveller-login.png",
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/traveller-whytraveller.png",
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/traveller-mainpage.png"
    ];

    const prjct2imgs=
    [
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/admin-dash-billing.png",
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/customer-dash-billing.png",
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/products-billing.png",
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/cart-billing.png"
    ];
    const prjct3imgs=
    [
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/generate-invoice-billing.png",
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/invoice-reports-billing2.png",
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/invoice-reports-billing2.png",
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/generate-invoice-billing.png"
    ];
    const prjct4imgs=
    [
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/hms-mainpage.png",
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/hms-appointment.png",
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/hms-prescription.png",
        "https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/bestintown-hms.png"
    ];
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 3000);
    
        return () => clearInterval(interval);
    }, []);
    
    function sendmail(){
        window.location = "mailto:ehreddy14@gmail.com";
    }
    function movetohome(){
        const homediv=document.querySelector(".home");
        homediv.scrollIntoView({behavior:"smooth"});
    }
    function movetoabout(){
        const aboutdiv = document.querySelector(".aboutme");
        aboutdiv.scrollIntoView({behavior:"smooth"});
    }
    function movetoprojects(){
        const aboutdiv = document.querySelector(".projects");
        aboutdiv.scrollIntoView({behavior:"smooth"});
    }
    function sendWhatsAppMessage() {
        window.open("https://wa.me/9347800480?text=Hello%20there!", "_self");
    }
    function opengit(){
        window.open("https://github.com/HemanthReddyEda", "_self")
    }

  return (
    <div className='bodyy'>
        <div className="nav">
            <div className="name" style={{fontWeight:"900",fontFamily:"sans-serif",fontStyle:"normal"}}>HemanthREDDY<span style={{fontWeight:"1500",color:"rgb(110, 6, 242)"}}>.</span></div>
            <div className='content'>
                <a className='home' onClick={movetohome} style={{color:"rgb(110,6,242)"}}>Home</a>
                <a className='about' onClick={movetoabout}>About</a>
                <a className='myworks' onClick={movetoprojects}>Projects</a>
            </div>
            <div className="whatsapp">
                <FontAwesomeIcon onClick={sendWhatsAppMessage} icon={faWhatsapp} style={{ color: "green", fontSize: "32px" }} />
            </div>
        </div>
        <div className="intro">
            <div className="introleft">
                <h5 style={{fontSize:"30px"}}>Hey, I&apos;m Hemanth 👋🏻</h5>
                <h1 style={{fontSize:"50px",fontWeight:"1000"}}><span className='full' style={{color:"rgb(110, 6, 242)"}}>FULL</span>STACK DEVELOPER</h1>
                <br />
                <h6 style={{fontWeight:"500", color:"#4e525a",fontSize:"15px"}}>Building Scalable & Efficient Web Applications with Java SpringBoot & ReactJs and Cloud Technologies (AWS, Azure).<br /> I aim to solve real-world problems with clean and efficient code. 🚀 </h6>
                <br />
                <button className='getintouch' onClick={sendmail}>Hire Me</button>
                <button className='browseprojects' onClick={opengit}>Browse Projects</button>
            </div>
            <div className="introright">
                <img className='fsdimage' src="https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/rb_17049.png" alt="hello" />
            </div>
        </div>
        <div className="aboutme">
            <h1>About me<span style={{color:"rgb(110, 6, 242)"}}>.</span></h1>
            <h6>Developing beautiful and functional websites is what I love doing, and that&apos;s why I give my all in every new challenge.</h6>
            <div className='stackplace'>
                <div className="stacks">
                    <h4 style={{fontWeight:"850", marginTop:"30px", fontFamily:"sans-serif"}}>Skills<span style={{color:"rgb(110, 6, 242)"}}>.</span></h4>
                    <div className="stackbox">
                        <div className="stack-item">
                            <img className="java" src="https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/4373217_java_logo_logos_icon.png" alt="java" />
                            <p>Java</p>
                        </div>
                        <div className="stack-item">
                            <img className="python" src="https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/4518857_python_icon.png" alt="python" />
                            <p>Python</p>
                        </div>
                        <div className="stack-item">
                            <img className="javascript" src="https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/8726156_java_script_icon.png" alt="JavaScript" />
                            <p>JavaScript</p>
                        </div>
                        <div className="stack-item">
                            <img className="react" src="https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/1174949_js_react+js_logo_react_react+native_icon.png" alt="React" />
                            <p>React</p>
                        </div>
                        <div className="stack-item">
                            <img className="html" src="https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/317755_badge_html_html5_achievement_award_icon.png" alt="HTML" />
                            <p>HTML</p>
                        </div>
                        <div className="stack-item">
                            <img className="css" src="https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/317756_badge_css_css3_achievement_award_icon.png" alt="CSS" />
                            <p>CSS</p>
                        </div>
                        <div className="stack-item">
                            <img className="spring" src="https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/icons8-spring-boot-160.png" alt="Spring Boot" />
                            <p>Spring Boot</p>
                        </div>
                        <div className="stack-item">
                            <img className="mysql" src="https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/1012821_code_development_logo_mysql_icon.png" alt="MySQL" />
                            <p>MySQL</p>
                        </div>
                        <div className="stack-item">
                            <img className="mongodb" src="https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/1012822_code_development_logo_mongodb_programming_icon.png" alt="MongoDB" />
                            <p>MongoDB</p>
                        </div>
                        <div className="stack-item">
                            <img className="bootstrap" src="https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/8546808_bootstrap_icon.png" alt="Bootstrap" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="stack-item">
                            <img className="git" src="https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/2993773_git_social+media_icon.png" alt="Git" />
                            <p>Git</p>
                        </div>
                        <div className="stack-item">
                            <img className="githubb" src="https://portfolio-hemanth.s3.ap-south-1.amazonaws.com/940962_git_github_hub+icon_icon.png" alt="GitHub" />
                            <p>GitHub</p>
                        </div>
                    </div>

                </div>
                <div className="achivements">
                    <h4 style={{fontWeight:"850", marginTop:"30px", fontFamily:"sans-serif"}}>My Achievements<span style={{color:"rgb(110, 6, 242)"}}>.</span></h4>
                    <div className="achievementsbox">
                        <ul className='achul'>
                            <li style={{marginBottom:"30px", marginTop:"20px"}}><h6>Recognized by EPAM Center of Excellence – EPAM.  <a href="#"><img className='link' src=".\src\assets\link.png" alt="link" style={{height:"18px",width:"18px"}}/></a></h6></li>
                            <li style={{marginBottom:"30px"}}><h6>Completed AWS Academy Cloud Foundations Certification, AWS. <a href="#"><img className='link' src=".\src\assets\link.png" alt="link" style={{height:"18px",width:"18px"}}/></a></h6></li>
                            <li style={{marginBottom:"30px"}}><h6>Achieved Problem Solving (Intermediate) Certification – HackerRank. <a href="#"><img className='link' src=".\src\assets\link.png" alt="link" style={{height:"18px",width:"18px"}}/></a></h6></li>
                            <li style={{marginBottom:"30px"}}><h6>Earned Python (Basic) Certification – HackerRank. <a href="#"><img className='link' src=".\src\assets\link.png" alt="link" style={{height:"18px",width:"18px"}}/></a></h6></li>
                            <li style={{marginBottom:"30px"}}><h6>Attained Java Developer Certification – Excelr Edutech Solutions. <a href="#"><img className='link' src=".\src\assets\link.png" alt="link" style={{height:"18px",width:"18px"}}/></a></h6></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="projects">
            <h1>Projects<span style={{color:"rgb(110, 6, 242)"}}>.</span></h1>
            <div className="projectcontent">
                <div className="p1">
                <div className="prjct1">
                    <img src={prjct1imgs[index]} alt="heropage" className="traveller" style={{height:"200px",width:"350px",objectFit:"fill"}} />
                </div>
                <div className="project-details" style={{marginLeft: "15px"}}>
                    <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "black", marginBottom: "7px" }}>Traveller</h3>
                    <p style={{
    fontSize: "14px", 
    color: "black",  
    textAlign: "justify",
    fontFamily: "Arial, sans-serif",
    fontWeight:"530"
  }}>
                    A Travel Planning Application that helps users organize trips efficiently by providing itinerary management, destination recommendations, and budget tracking. It offers a seamless experience with real-time updates, interactive maps, and personalized travel suggestions.
                    </p>
                </div>
                </div>
                <div className="p2">
                <div className="prjct2">
                    <img src={prjct2imgs[index]} alt="admindashbilling" className="ecom" style={{height:"200px",width:"400px",objectFit:"fill"}}/>
                </div>
                <div className="project-details" style={{marginLeft: "75px"}}>
                    <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "black", marginBottom: "7px" }}>Ecommerce Application</h3>
                    <p style={{
    fontSize: "14px", 
    color: "black",  
    textAlign: "justify",
    fontFamily: "Arial, sans-serif",
    fontWeight:"530"
  }}>
                    An E-commerce Application that enables businesses to sell products online with features like product catalogs, secure payment gateways, and user accounts. It provides a seamless shopping experience with order management, real-time inventory tracking, and customer support.
                    </p>
                </div>
                </div>
            </div>
            <div className="projectcontent">
                <div className="p1">
                <div className="prjct1">
                    <img src={prjct3imgs[index]} className="traveller" style={{height:"200px",width:"350px",objectFit:"fill"}} />
                </div>
                <div className="project-details" style={{marginLeft: "15px"}}>
                    <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "black", marginBottom: "7px" }}>Billing Application</h3>
                    <p style={{
    fontSize: "14px", 
    color: "black",  
    textAlign: "justify",
    fontFamily: "Arial, sans-serif",
    fontWeight:"530"
  }}>
                    A Billing Application that streamlines invoice generation, payment processing, and expense tracking for businesses. It ensures accuracy and efficiency with automated calculations, secure transactions, and real-time reporting.
                    </p>
                </div>
                </div>
                <div className="p2">
                <div className="prjct2">
                    <img src={prjct4imgs[index]} className="ecom" style={{height:"200px",width:"400px",objectFit:"fill"}}/>
                </div>
                <div className="project-details" style={{marginLeft: "75px"}}>
                <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "black", marginBottom: "7px" }}>
  Hospital Management System
</h3>
<p style={{
    fontSize: "14px", 
    color: "black",  
    textAlign: "justify",
    fontFamily: "Arial, sans-serif",
    fontWeight:"530"
  }}>
  A Hospital Management System that streamlines patient records, appointment scheduling, and billing processes for healthcare facilities. It enhances operational efficiency with real-time updates, secure data management, and seamless communication between departments.
</p>

                </div>
                </div>
            </div>
        </div>
        <div className="lastsection">
            <div className='content'>
                <a className='home' onClick={movetohome}>Home</a>
                <a className='about' onClick={movetoabout}>About</a>
                <a className='myworks' onClick={movetoprojects}>Projects</a>
            </div>
            <div className="socialmedia">
                <a href="https://wa.me/9347800480?text=Hello%20there!">
                    <svg className="whatsapp" height="30px" width="30px" viewBox="0 0 56.693 56.693" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                        <g fill="currentColor" transform="translate(0.000000, -85.000000)">
                            <g transform="translate(0.000000, 85.000000)">
                        <path d="M46.3802,10.7138c-4.6512-4.6565-10.8365-7.222-17.4266-7.2247c-13.5785,0-24.63,11.0506-24.6353,24.6333   c-0.0019,4.342,1.1325,8.58,3.2884,12.3159l-3.495,12.7657l13.0595-3.4257c3.5982,1.9626,7.6495,2.9971,11.7726,2.9985h0.01   c0.0008,0-0.0006,0,0.0002,0c13.5771,0,24.6293-11.0517,24.635-24.6347C53.5914,21.5595,51.0313,15.3701,46.3802,10.7138z    M28.9537,48.6163h-0.0083c-3.674-0.0014-7.2777-0.9886-10.4215-2.8541l-0.7476-0.4437l-7.7497,2.0328l2.0686-7.5558   l-0.4869-0.7748c-2.0496-3.26-3.1321-7.028-3.1305-10.8969c0.0044-11.2894,9.19-20.474,20.4842-20.474   c5.469,0.0017,10.6101,2.1344,14.476,6.0047c3.8658,3.8703,5.9936,9.0148,5.9914,14.4859   C49.4248,39.4307,40.2395,48.6163,28.9537,48.6163z"/><path  d="M40.1851,33.281c-0.6155-0.3081-3.6419-1.797-4.2061-2.0026c-0.5642-0.2054-0.9746-0.3081-1.3849,0.3081   c-0.4103,0.6161-1.59,2.0027-1.9491,2.4136c-0.359,0.4106-0.7182,0.4623-1.3336,0.1539c-0.6155-0.3081-2.5989-0.958-4.95-3.0551   c-1.83-1.6323-3.0653-3.6479-3.4245-4.2643c-0.359-0.6161-0.0382-0.9492,0.27-1.2562c0.2769-0.2759,0.6156-0.7189,0.9234-1.0784   c0.3077-0.3593,0.4103-0.6163,0.6155-1.0268c0.2052-0.4109,0.1027-0.7704-0.0513-1.0784   c-0.1539-0.3081-1.3849-3.3379-1.8978-4.5706c-0.4998-1.2001-1.0072-1.0375-1.3851-1.0566   c-0.3585-0.0179-0.7694-0.0216-1.1797-0.0216s-1.0773,0.1541-1.6414,0.7702c-0.5642,0.6163-2.1545,2.1056-2.1545,5.1351   c0,3.0299,2.2057,5.9569,2.5135,6.3676c0.3077,0.411,4.3405,6.6282,10.5153,9.2945c1.4686,0.6343,2.6152,1.013,3.5091,1.2966   c1.4746,0.4686,2.8165,0.4024,3.8771,0.2439c1.1827-0.1767,3.6419-1.489,4.1548-2.9267c0.513-1.438,0.513-2.6706,0.359-2.9272   C41.211,33.7433,40.8006,33.5892,40.1851,33.281z"/>
                        </g>
                        </g>
                        </g>
                    
                    </svg>
                </a>
                <a href="mailto:ehreddy14@gmail.com">
                    <svg className="gmail" height="30px" width="30px" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                        <g fill="currentColor" transform="translate(0.000000, -85.000000)">
                            <g transform="translate(0.000000, 85.000000)">
                            <path d="M18,0 L2,0 C0.9,0 0,0.9 0,2 L0,14 C0,15.1 0.9,16 2,16 L18,16 C19.1,16 20,15.1 20,14 L20,2 C20,0.9 19.1,0 18,0 L18,0 Z M18,14 L16,14 L16,5.2 L10,9 L4,5.2 L4,14 L2,14 L2,2 L3.2,2 L10,6.2 L16.8,2 L18,2 L18,14 L18,14 Z"/>
                            </g>
                        </g>
                        </g>
                    </svg>
                </a>
                <a href="https://linkedin.com/in/edahemanthreddy">
                    <svg className="linkedin" height="30px" width="30px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                        <g fill="currentColor" transform="translate(0.000000, -85.000000)">
                            <g transform="translate(0.000000, 85.000000)">
                    <path d="M106.09,20.5a1.41,1.41,0,0,1,1.41,1.41v84.19a1.41,1.41,0,0,1-1.41,1.41H21.91a1.41,1.41,0,0,1-1.41-1.41V21.91a1.41,1.41,0,0,1,1.41-1.41h84.19m0-6.5H21.91A7.91,7.91,0,0,0,14,21.91v84.19A7.91,7.91,0,0,0,21.91,114h84.19a7.91,7.91,0,0,0,7.91-7.91V21.91A7.91,7.91,0,0,0,106.09,14Z"/><rect height="41.73" width="11.73" x="37.27" y="50.4"/><path  d="M77.23,50.4C67.18,50.4,67,56.21,67,56.61V50.4H55V92.13H67V68.31c0-1.86.55-5.86,6.23-5.86s5.63,5.73,5.63,5.73v24H90.73v-26C90.73,53.85,84,50.4,77.23,50.4Z"/><circle  cx="43.13" cy="41.73" r="5.86"/>
                    </g>
                        </g>
                        </g>
                    </svg>
                </a>
                <a href="https://github.com/HemanthReddyEda">
                    <svg className='github' height="30px" width="30px" viewBox="-1163 1657.697 56.693 56.693" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                        <g fill="currentColor" transform="translate(0.000000, -85.000000)">
                            <g transform="translate(0.000000, 85.000000)">
                        <path  d="M-1134.6598,1662.9163c-13.601,0-24.63,11.0267-24.63,24.6299   c0,10.8821,7.0573,20.1144,16.8435,23.3713c1.2308,0.2279,1.6829-0.5345,1.6829-1.1849c0-0.587-0.0227-2.5276-0.0334-4.5857   c-6.8521,1.4901-8.2979-2.906-8.2979-2.906c-1.1205-2.8467-2.7347-3.6039-2.7347-3.6039   c-2.2349-1.5287,0.1685-1.4972,0.1685-1.4972c2.473,0.1737,3.7755,2.5385,3.7755,2.5385c2.1967,3.7651,5.7618,2.6765,7.1675,2.0472   c0.2211-1.5917,0.8591-2.6786,1.5637-3.2936c-5.4707-0.6226-11.2218-2.7347-11.2218-12.1722c0-2.6888,0.9623-4.8861,2.538-6.611   c-0.2557-0.6206-1.0989-3.1255,0.2386-6.5183c0,0,2.0684-0.6616,6.7747,2.525c1.9648-0.5458,4.0719-0.8195,6.165-0.829   c2.093,0.0095,4.2017,0.2832,6.17,0.829c4.7012-3.1866,6.7665-2.525,6.7665-2.525c1.3406,3.3928,0.4974,5.8977,0.2417,6.5183   c1.5793,1.7249,2.5348,3.9221,2.5348,6.611c0,9.4602-5.7618,11.5428-11.2465,12.1527c0.8834,0.7644,1.6704,2.2632,1.6704,4.561   c0,3.2955-0.0282,5.9479-0.0282,6.7592c0,0.6556,0.4432,1.4236,1.6915,1.1818c9.7812-3.2605,16.8296-12.4896,16.8296-23.3682   C-1110.0299,1673.943-1121.0574,1662.9163-1134.6598,1662.9163z" fillRule="evenodd"/><path d="M-1149.9611,1698.2793c-0.0542,0.1227-0.2469,0.1593-0.4222,0.0753c-0.1788-0.0804-0.2788-0.2473-0.2211-0.37   c0.053-0.126,0.2457-0.161,0.4242-0.0769C-1150.0013,1697.9882-1149.8993,1698.1566-1149.9611,1698.2793L-1149.9611,1698.2793z    M-1150.2642,1698.0547"/><path d="M-1148.9634,1699.3922c-0.1174,0.1086-0.3473,0.0581-0.5031-0.1139c-0.1613-0.1718-0.1912-0.4016-0.072-0.5118   c0.1211-0.1088,0.3438-0.0579,0.505,0.1139C-1148.8721,1699.0541-1148.8407,1699.2819-1148.9634,1699.3922L-1148.9634,1699.3922z    M-1149.1984,1699.14"/><path d="M-1147.9922,1700.8105c-0.151,0.1051-0.3979,0.0067-0.5505-0.2123c-0.151-0.2191-0.151-0.4819,0.0035-0.5872   c0.1526-0.1051,0.396-0.0104,0.5505,0.2068C-1147.8381,1700.4406-1147.8381,1700.7034-1147.9922,1700.8105L-1147.9922,1700.8105z    M-1147.9922,1700.8105"/><path d="M-1146.6619,1702.1812c-0.1351,0.1489-0.4227,0.1086-0.6329-0.0945c-0.2155-0.1984-0.2753-0.4803-0.1403-0.6293   c0.1371-0.149,0.4263-0.1072,0.6381,0.0944C-1146.5831,1701.7501-1146.5182,1702.0337-1146.6619,1702.1812L-1146.6619,1702.1812z    M-1146.6619,1702.1812"/><path d="M-1144.8265,1702.9769c-0.0597,0.1927-0.3365,0.2804-0.6154,0.1984c-0.2788-0.0845-0.4608-0.3103-0.4047-0.5051   c0.0577-0.1943,0.3361-0.2855,0.6169-0.1979C-1144.9512,1702.5563-1144.7688,1702.7805-1144.8265,1702.9769L-1144.8265,1702.9769z    M-1144.8265,1702.9769"/><path d="M-1142.8107,1703.1243c0.0067,0.2031-0.2299,0.3716-0.5226,0.3752c-0.2944,0.0067-0.533-0.1577-0.5361-0.3577   c0-0.2052,0.2313-0.3717,0.5258-0.3768C-1143.0509,1702.7594-1142.8107,1702.9227-1142.8107,1703.1243L-1142.8107,1703.1243z    M-1142.8107,1703.1243"/><path d="M-1140.9351,1702.8052c0.035,0.198-0.1686,0.4015-0.4594,0.4557c-0.2859,0.0526-0.5504-0.0701-0.587-0.2665   c-0.0354-0.2031,0.1716-0.4066,0.4573-0.4592C-1141.233,1702.4846-1140.9722,1702.6036-1140.9351,1702.8052L-1140.9351,1702.8052z    M-1140.9351,1702.8052"/>
                        </g>
                        </g>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
        <div className="hireme" style={{paddingBottom:"15px",marginBottom:"15px"}}>
            <div className="intrested" style={{alignItems:"center",justifyContent:"space-between"}}>
                <h4 style={{fontWeight:"700", color:"rgb(107, 107, 108)",justifySelf:"self-start", alignSelf:"center",width:"50%"}}>Intrested in working together<span style={{color:"rgb(110, 6, 242)"}}>?</span></h4>
                </div>
            <div className="hirebutton" style={{display:"inline-flex", justifyContent:"center", alignItems:"center"}}>
            <button className='getintouch' onClick={sendmail}>Hire Me</button>
            <button className='browseprojects' onClick={opengit}>Browse Projects</button>
            <h6 style={{fontWeight:"500", color:"rgb(107, 107, 108)", justifySelf:"self-end", alignSelf:"center", marginLeft:"675px"}}>©2025 All Rights Reserved.<br />Made with 💜 Eda Hemanth Reddy</h6>
            </div>
        </div>
    </div>
  )
}

export default Mainpage