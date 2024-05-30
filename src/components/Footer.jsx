import React, { useState } from 'react';
import Icon from './Icon';
import Logo from './Logo';
import Button from './Button';
import Input from './Input';
import { NavLink } from 'react-router-dom';

function Footer() {
  const [black, setBlack] = useState(false);
  const headerItems = [
    {
        name: 'About',
        slug: '/about',
    },
    {
        name: 'Services',
        slug: '/services',
    },
    {
        name: 'Cars',
        slug: '/cars',
        subItems: {
            item1: {
                name: 'Car Grid',
                slug: '#'
            },
            items2: {
                name: 'Cars Listings',
                slug: '#'
            },
        }
    },
    {
        name: 'Pages',
        slug: '/pages',
        subItems: {
            item1: {
                name: 'Team',
                slug: '#'
            },
            items2: {
                name: 'FAQ',
                slug: '#'
            },
            items3: {
                name: 'Testmonials',
                slug: '#'
            },
        }
    },
    {
        name: 'Contact',
        slug: '/contact'
    }
]

  return (
    <div className='w-full py-28 px-8 flex flex-col gap-24 bg-[#222222]'>
      <div className='w-full flex flex-col md:flex-row justify-start md:justify-evenly gap-8 md:gap-2'>
        <div className='flex gap-4'>
          <Icon className={'size-16 rounded-full bg-[#f5b754] flex items-center justify-center'}>
            <svg width="40px" height="40px" viewBox="0 -0.5 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.24033 8.16795C6.99433 7.37295 7.26133 7.14995 7.58233 7.04695C7.80482 6.98843 8.03822 6.98499 8.26233 7.03695C8.55733 7.12295 8.63433 7.18795 9.60233 8.15095C10.4523 8.99695 10.5363 9.08895 10.6183 9.25095C10.7769 9.54253 10.8024 9.88825 10.6883 10.1999C10.6043 10.4349 10.4803 10.5909 9.96533 11.1089L9.62933 11.4459C9.54093 11.5356 9.51997 11.6719 9.57733 11.7839C10.3232 13.0565 11.3812 14.1179 12.6513 14.8679C12.7978 14.9465 12.9783 14.921 13.0973 14.8049L13.4203 14.4869C13.6199 14.2821 13.8313 14.0891 14.0533 13.9089C14.4015 13.6935 14.8362 13.6727 15.2033 13.8539C15.3823 13.9379 15.4423 13.9929 16.3193 14.8669C17.2193 15.7669 17.2483 15.7959 17.3493 16.0029C17.5379 16.3458 17.536 16.7618 17.3443 17.1029C17.2443 17.2949 17.1883 17.3649 16.6803 17.8839C16.3733 18.1979 16.0803 18.4839 16.0383 18.5259C15.6188 18.8727 15.081 19.043 14.5383 19.0009C13.5455 18.9101 12.5847 18.6029 11.7233 18.1009C9.81416 17.0894 8.18898 15.6155 6.99633 13.8139C6.73552 13.4373 6.50353 13.0415 6.30233 12.6299C5.76624 11.7109 5.48909 10.6638 5.50033 9.59995C5.54065 9.04147 5.8081 8.52391 6.24033 8.16795Z" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.8417 4.29409C14.4518 4.15416 14.0224 4.35677 13.8824 4.74664C13.7425 5.1365 13.9451 5.56598 14.335 5.70591L14.8417 4.29409ZM18.7868 10.0832C18.9333 10.4707 19.3661 10.666 19.7536 10.5195C20.141 10.373 20.3364 9.94021 20.1899 9.55276L18.7868 10.0832ZM13.6536 6.52142C13.2495 6.43018 12.848 6.68374 12.7568 7.08778C12.6655 7.49182 12.9191 7.89333 13.3231 7.98458L13.6536 6.52142ZM16.5696 11.1774C16.6676 11.5799 17.0733 11.8267 17.4757 11.7287C17.8782 11.6307 18.125 11.2251 18.0271 10.8226L16.5696 11.1774ZM14.335 5.70591C16.3882 6.44286 18.0153 8.04271 18.7868 10.0832L20.1899 9.55276C19.2631 7.10139 17.3084 5.17942 14.8417 4.29409L14.335 5.70591ZM13.3231 7.98458C14.9238 8.34607 16.1815 9.58301 16.5696 11.1774L18.0271 10.8226C17.5042 8.67475 15.8098 7.0084 13.6536 6.52142L13.3231 7.98458Z" fill="#000" />
            </svg>
          </Icon>
          <div className='flex flex-col justify-center text-white'>
            <p>Call Us</p>
            <p className='text-[14px]'>+971 52-333-4444</p>
          </div>
        </div>

        <div className='flex gap-4'>
          <Icon className={'size-16 rounded-full bg-[#f5b754] flex items-center justify-center'} >
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="#000"/>
            </svg>
          </Icon>
          <div className='flex flex-col justify-center text-white'>
            <p>Write To Us</p>
            <p className='text-[14px]'>info@renax.com</p>
          </div>
        </div>

        <div className='flex gap-4'>
          <Icon className={'size-16 rounded-full bg-[#f5b754] flex items-center justify-center'} >
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Icon>
          <div className='flex flex-col justify-center text-white'>
            <p>Address</p>
            <p className='text-[14px]'>Dubai, Water Tower, Office 123</p>
          </div>
        </div>
      </div>

      <div className='w-5/6 md:w-3/4 mx-auto flex flex-col md:flex-row justify-between gap-8'>
        <div className='w-full md:w-1/3 flex flex-col gap-5'>
          <Logo className={'w-[130px] h-[18.6px]'}/>
          <p className='w-full md:w-2/3 text-[14px] text-[#999999]'>
            Rent a car imperdiet sapien porttito the bibenum ellentesue the commodo erat nesuen.
          </p>

          <div className='flex gap-4'>

            <Button 
              className={'rounded-full border-[1px] border-[#e4ac52] cursor-default p-3 lg:p-4 hover:bg-[#e4ac52]'}>
              <svg width="20px" height="20px" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"><defs></defs>
                <path className="cls-1" fill={black ? '#f5b754' : '#fff'} stroke={black ? "#000" : "#fff"} strokeWidth="2" d="M24,2.5A21.52,21.52,0,0,0,5.15,34.36L2.5,45.5l11.14-2.65A21.5,21.5,0,1,0,24,2.5ZM13.25,12.27h5.86a1,1,0,0,1,1,1,10.4,10.4,0,0,0,.66,3.91,1.93,1.93,0,0,1-.66,2.44l-2.05,2a18.6,18.6,0,0,0,3.52,4.79A18.6,18.6,0,0,0,26.35,30l2-2.05c1-1,1.46-1,2.44-.66a10.4,10.4,0,0,0,3.91.66,1.05,1.05,0,0,1,1,1v5.86a1.05,1.05,0,0,1-1,1,23.68,23.68,0,0,1-15.64-6.84,23.6,23.6,0,0,1-6.84-15.64A1.07,1.07,0,0,1,13.25,12.27Z"/>
              </svg>
            </Button>

            <Button 
              className={'rounded-full border-[1px] border-[#e4ac52] cursor-default p-3 lg:p-4 hover:bg-[#e4ac52]'}>
              <svg width="20px" height="20px" viewBox="0 -0.5 25 25" fill={black ? '#f5b754' : '#fff'} xmlns="http://www.w3.org/2000/svg">
                <path d="M11.75 19C11.75 19.4142 12.0858 19.75 12.5 19.75C12.9142 19.75 13.25 19.4142 13.25 19H11.75ZM13.25 11C13.25 10.5858 12.9142 10.25 12.5 10.25C12.0858 10.25 11.75 10.5858 11.75 11H13.25ZM15.5 5.75C15.9142 5.75 16.25 5.41421 16.25 5C16.25 4.58579 15.9142 4.25 15.5 4.25V5.75ZM12.5 8H11.75H12.5ZM11.75 11C11.75 11.4142 12.0858 11.75 12.5 11.75C12.9142 11.75 13.25 11.4142 13.25 11H11.75ZM12.5 10.25C12.0858 10.25 11.75 10.5858 11.75 11C11.75 11.4142 12.0858 11.75 12.5 11.75V10.25ZM14.5 11.75C14.9142 11.75 15.25 11.4142 15.25 11C15.25 10.5858 14.9142 10.25 14.5 10.25V11.75ZM12.5 11.75C12.9142 11.75 13.25 11.4142 13.25 11C13.25 10.5858 12.9142 10.25 12.5 10.25V11.75ZM10.5 10.25C10.0858 10.25 9.75 10.5858 9.75 11C9.75 11.4142 10.0858 11.75 10.5 11.75V10.25ZM13.25 19V11H11.75V19H13.25ZM15.5 4.25C13.4289 4.25 11.75 5.92893 11.75 8H13.25C13.25 6.75736 14.2574 5.75 15.5 5.75V4.25ZM11.75 8V11H13.25V8H11.75ZM12.5 11.75H14.5V10.25H12.5V11.75ZM12.5 10.25H10.5V11.75H12.5V10.25Z" fill={black ? '#f5b754' : '#fff'}/>
              </svg>
            </Button>

            <Button 
              className={'rounded-full border-[1px] border-[#e4ac52] cursor-default p-3 lg:p-4 hover:bg-[#e4ac52]'}>
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill={black ? '#f5b754' : '#fff'} xmlns="http://www.w3.org/2000/svg">
                <path d="M19.67 8.14002C19.5811 7.7973 19.4028 7.48433 19.1533 7.23309C18.9038 6.98185 18.5921 6.80134 18.25 6.71001C16.176 6.4654 14.0883 6.35517 12 6.38001C9.91174 6.35517 7.82405 6.4654 5.75001 6.71001C5.40793 6.80134 5.09622 6.98185 4.84674 7.23309C4.59725 7.48433 4.41894 7.7973 4.33001 8.14002C4.10282 9.41396 3.99236 10.706 4.00001 12C3.99198 13.3007 4.10244 14.5994 4.33001 15.88C4.42355 16.2172 4.60391 16.5239 4.85309 16.7696C5.10226 17.0153 5.41153 17.1913 5.75001 17.28C7.82405 17.5246 9.91174 17.6349 12 17.61C14.0883 17.6349 16.176 17.5246 18.25 17.28C18.5885 17.1913 18.8978 17.0153 19.1469 16.7696C19.3961 16.5239 19.5765 16.2172 19.67 15.88C19.8976 14.5994 20.008 13.3007 20 12C20.0077 10.706 19.8972 9.41396 19.67 8.14002ZM10.36 14.39V9.63001L14.55 12L10.36 14.38V14.39Z" fill="#fff"/>
              </svg>
            </Button>
            
          </div>
        </div>

        <div className='w-full md:w-1/4 relative flex flex-col gap-4'>
          <h1 className='text-white font-semibold text-[21px] text-start'>Quick Links</h1>
          <ul className='list-disc styledList flex flex-col gap-4'>
          {
                headerItems.map(items =>
                  <li>
                    <NavLink to={items.slug} className={`text-[#999999] font-thin hover:text-[#cb8351] font-outfit`} key={items.name}>{items.name}</NavLink>
                  </li>
                    )
            }
          </ul>
        </div>

        <div className='w-full md:w-1/3 flex flex-col gap-4'>
          <h1 className='text-white font-semibold text-[21px] text-start'>Subscribe</h1>
          <p className='w-full md:w-2/3 text-[14px] text-[#999999]'>
          Want to be notified about our services. Just sign up and we'll send you a notification by email.
          </p>
          <section className='relative w-full group'>
            <Input className={'w-full border-2 border-[#f5b754] rounded-full py-5 px-4 bg-[#222222] text-[#999999]'}
              placeholder={'Email Address'}
            />
            <Button className={'text-black size-[52px] text-[24px] flex items-center justify-center rotate-45 absolute right-2 bottom-[8px] bg-[#f5b754] p-3 rounded-full transition delay-75 duration-700 ease-in-out group-hover:rotate-90 group-hover:bg-white'}>↑</Button>
          </section>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
}

export default Footer;
