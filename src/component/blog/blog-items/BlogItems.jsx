import './BlogItems.scss';
import { IoPersonSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaTag } from "react-icons/fa";
import BlogItem01 from '../../../assets/blog/blog-items/blog_01.png';
import BlogItem02 from '../../../assets/blog/blog-items/blog_02.png';
import BlogItem03 from '../../../assets/blog/blog-items/blog_03.png';
import RecentPostImg01 from '../../../assets/blog/recent-posts/recentPostImg01.png';
import RecentPostImg02 from '../../../assets/blog/recent-posts/recentPostImg02.png';
import RecentPostImg03 from '../../../assets/blog/recent-posts/recentPostImg03.png';
import RecentPostImg04 from '../../../assets/blog/recent-posts/recentPostImg04.png';
import RecentPostImg05 from '../../../assets/blog/recent-posts/recentPostImg05.png';


export default function BlogItems(){

    return(
        <div className="blog_container">

            <div className='blogs'>
                <div className='blog_item'> 
                    <div className='blog_img'>
                        <img src={BlogItem01} />
                    </div>

                    <div className='publication_info'>
                        <div>
                            <IoPersonSharp />
                            <span>Admin</span>
                        </div>                        
                        <div>
                            <SlCalender />
                            <span>14 Oct 2022</span>
                        </div>                        
                        <div>
                            <FaTag />
                            <span>Wood</span>
                        </div>   
                    </div>

                    <h1 className='heading'>Going all-in with millennial design</h1>

                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

                    <span className='read_more'>Read more</span>
                </div>

                <div className='blog_item'> 
                    <div className='blog_img'>
                        <img src={BlogItem02} />
                    </div>

                    <div className='publication_info'>
                        <div>
                            <IoPersonSharp />
                            <span>Admin</span>
                        </div>                        
                        <div>
                            <SlCalender />
                            <span>14 Oct 2022</span>
                        </div>                        
                        <div>
                            <FaTag />
                            <span>Wood</span>
                        </div>   
                    </div>

                    <h1 className='heading'>Going all-in with millennial design</h1>

                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

                    <span className='read_more'>Read more</span>
                </div>

                <div className='blog_item'> 
                    <div className='blog_img'>
                        <img src={BlogItem03} />
                    </div>

                    <div className='publication_info'>
                        <div>
                            <IoPersonSharp />
                            <span>Admin</span>
                        </div>                        
                        <div>
                            <SlCalender />
                            <span>14 Oct 2022</span>
                        </div>                        
                        <div>
                            <FaTag />
                            <span>Wood</span>
                        </div>   
                    </div>

                    <h1 className='heading'>Going all-in with millennial design</h1>

                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

                    <span className='read_more'>Read more</span>
                </div>

            </div>

            <div className='categories_section'>
                <input 
                    type='text' 
                    className='input' 
                />

                <div className='categories_and_recent_posts'>
                    <div className='categories'>
                        <span className='heading'>Categories</span>
                        <div className='category_list'>
                            <div>
                                <span>Crafts</span>    
                                <span>2</span>    
                            </div>

                            <div>
                                <span>Design</span>    
                                <span>8</span>    
                            </div>

                            <div>
                                <span>Handsome</span>    
                                <span>7</span>    
                            </div>

                            <div>
                                <span>Interior</span>    
                                <span>1</span>    
                            </div>

                            <div>
                                <span>Wood</span>    
                                <span>6</span>    
                            </div>

                        </div>
                    </div>

                    <div className='recent_posts'>
                        <span className='heading'>Recent Posts</span>

                        <div className='recent_post_container'>
                            <div className='recent_post_item'>
                                <div className='recent_post_img'>
                                    <img src={RecentPostImg01} />
                                </div>

                                <div className='related_info'>
                                    <span className='post_title'>Going all-in with millennial design</span>
                                    <span className='date'>03 Aug 2022</span>
                                </div>
                            </div><div className='recent_post_item'>
                                <div className='recent_post_img'>
                                    <img src={RecentPostImg02} />
                                </div>

                                <div className='related_info'>
                                    <span className='post_title'>Exploring new ways of decorating</span>
                                    <span className='date'>03 Aug 2022</span>
                                </div>
                            </div>
                            <div className='recent_post_item'>
                                <div className='recent_post_img'>
                                    <img src={RecentPostImg01} />
                                </div>

                                <div className='related_info'>
                                    <span className='post_title'>Going all-in with millennial design</span>
                                    <span className='date'>03 Aug 2022</span>
                                </div>
                            </div><div className='recent_post_item'>
                                <div className='recent_post_img'>
                                    <img src={RecentPostImg02} />
                                </div>

                                <div className='related_info'>
                                    <span className='post_title'>Exploring new ways of decorating</span>
                                    <span className='date'>03 Aug 2022</span>
                                </div>
                            </div>
                            <div className='recent_post_item'>
                                <div className='recent_post_img'>
                                    <img src={RecentPostImg03} />
                                </div>

                                <div className='related_info'>
                                    <span className='post_title'>Handmade pieces that took time to make</span>
                                    <span className='date'>03 Aug 2022</span>
                                </div>
                            </div>

                        </div>    
                    </div>
                </div>
                
            </div>
        </div>
    )
} 