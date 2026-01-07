import logo from '../../images/arc_accelerator.svg';
import laptop from '../../images/laptop_display.png'
import cr_logo from '../../images/CorsairRanch_Color.png'
import './Home.css'
import Swal from 'sweetalert2'
import React from "react";


function Home(){

    const handleClick = () => {
        Swal.fire({
            title: 'Accelerate your idea',
            html: `
            <div style = "display: flex; align-items: center; flex-direction: column;">
                <select id="selection" class="swal2-select">
                    <option value = "Select">--- Select ---</option>
                    <option value="Submit an Idea">Submit an Idea</option>
                    <option value="Manage a Project">Manage a Project</option>
                </select>
                    <br>
                    <a id="link" className="custom-link" href="#" style="display: none;">
                        <div id = "linkSection" style = "display: none;">
                            Please Make Selection
                        </div>
                    </a>
            <div>`,
            icon: 'info',
            footer: '<p style = "color: red;">VPN is required to access links.</p>',
            confirmButtonText: 'Go Back',
            didOpen: () => {
              const selection = document.getElementById('selection');
              const link = document.getElementById('link');
              const linkSec = document.getElementById('linkSection');
          
              selection.addEventListener('change', () => {
                if (selection.value === 'Submit an Idea') {
                  link.href = 'https://gain.il4.afwerx.dso.mil/';
                  linkSec.style = "display: show; display: flex; justify-content: center; align-items: center; border-radius: 10px; width: 175px; height: 60px; background-color: #7066e0; color: #fff";
                  linkSec.innerText = 'Go To Site'
                  link.style = "margin: auto; display: show;text-decoration: none;font-weight: 500;";

                } else if (selection.value === 'Manage a Project') {
                  link.href = 'https://vision.il4.afwerx.dso.mil/';
                  linkSec.style = "display: show; display: flex; justify-content: center; align-items: center; border-radius: 10px; width: 175px; height: 60px; background-color: #7066e0; color: #fff";
                  linkSec.innerText = 'Go To Site'
                  link.style = "margin: auto; display: show;text-decoration: none;font-weight: 500;";
                } else{
                    link.href = '#';
                    link.style = "display: none;"
                }
              });
            },
          });
    }

    const handleClick2 = () => {
        Swal.fire({
            confirmButtonText: 'Close',
            html: `
            <div className="whole" style="height: 600px; overflow-y: auto;">
                <select id="selection" class="swal2-select">
                    <option value="Select">--- Select ---</option>
                    <option value="Civilian">Civilian</option>
                    <option value="Government">Government</option>
                </select>
                <iframe
                    title="google-form"
                    src="https://forms.gle/NyAcRSD12dowbWUv9"
                    style="width: 100%; height: 100%;"
                    id="iframe1"
                >Loading…</iframe>
                <iframe
                    title="google-form"
                    src="https://forms.gle/egZBtaWfKznNKB8dA"
                    style="width: 100%; height: 100%;"
                    id="iframe2"
                >Loading…</iframe>
            </div>`,
            title: "Connect with our team",
            didOpen: () => {
                const selection = document.getElementById('selection');
                const iframe1 = document.getElementById('iframe1');
                const iframe2 = document.getElementById('iframe2');
                iframe1.hidden = true;
                iframe2.hidden = true;
                selection.addEventListener('change', () => {
                    if (selection.value === "Civilian") {
                        iframe1.hidden = false;
                        iframe2.hidden = true;
                    } else if (selection.value === 'Government') {
                        iframe1.hidden = true;
                        iframe2.hidden = false;
                    } else {
                        iframe1.hidden = true;
                        iframe2.hidden = true;
                    }
                });
            }
        })
    }
    
    return (
        <div>
            <div className='top-section'>
                <div className='top-section-content'>
                    <div className='top-section-image'>
                        <img src={laptop} className='laptop' alt='laptop' />
                    </div>
                    <div className='top-section-title'>
                        <h2>We Help Airmen</h2>
                        <h2>Turn Ideas Into Reality!</h2>
                    </div>
                </div>
            </div>

            <div className='mid-section'>
                <div className='body-section'>
                    <div className='card-entry'>
                        <img className = "arcwerx-img"src={logo} alt="logo_jpeg"></img>
                        <div className='card-desc'>
                            <h2>Connect</h2>
                            <p>Connect to an ecosystem of empowered ARC innovators that can affect change at every level of your organization.</p>
                            <button className='connect-button' onClick = {handleClick2}>Connect with our team!</button>
                        </div>
                        <div className='card-desc'>
                            <h2>Educate</h2>
                            <p>Gain the knowledge to change your organizations culture - a culture of innovation.</p>
                            <a href='https://usaf.dps.mil/teams/ARCWERXAccelerator/ARC-EDU'><button className='education-button'>Education Opportunities</button></a>
                        </div>
                        <div className='card-desc'>
                            <h2>Accelerate</h2>
                            <p>Accelerate your ideas - get test, scale, and share across the enterprise.</p>
                            <button className='accelerate-button' onClick={handleClick}>Accelerate your ideas</button>
                        </div>
    
                    </div>
                    <div className='card-entry card-entry-2'>
                        <img className = "corsair-ranch-img" src={cr_logo} alt="logo_jpeg"></img>
                        <div className='card-desc'>
                            <h2>DevSecOps</h2>
                            <p>We perform continuous development, integration, test, deployment, and sustainment in accordance with DoD CIO directives and DIB guidance for software transformation.</p>
                            <h2>User-Centric Design</h2>
                            <p>We build what users need and modernize the ARC software developement lifecycle based on requirements from the field, not rigid requirements documents lapsed by emerging threats.</p>
                            <h2>Experimentation</h2>
                            <p>We experiment with processes, tools, and culture, always striving to be an organization focused on delivering usable capability faster.</p>
                            <a href='https://corsairranch.dso.mil/'><button href="">Visit Us at Corsair Ranch</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-section'>
                <div className='bottom-content'>
                  <h2>If you want to learn more about innovation</h2>
            {/* eslint-disable */}
                  <h2> and your unit's mission, contact us for the more information.</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;