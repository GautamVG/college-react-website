import './index.css';

import Navbar from '../../components/Navbar';
import PostsSection from '../../components/PostsSection';
import Post from '../../components/Post';
import Footer from '../../components/Footer';

import logo from '../../assets/Logo.png';

import { posts, events } from './data';

export default function() {
    return <>
        <header>
            <Navbar showLogo={false} />
        </header>

        <main>
            <section class="head">
                <div class="logo img-container">
                    <img src={logo} />
                </div>
                <ul>
                    <li>
                        <h3>Tag 1</h3>
                    </li>
                    <li class="triangle"></li>
                    <li>
                        <h3>Tag 1</h3>
                    </li>
                    <li class="triangle"></li>
                    <li>
                        <h3>Tag 1</h3>
                    </li>
                </ul>
                <h1 class="typing-reveal">TITLE/NAME</h1>
                <hr />
                <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, labore aliquam?</blockquote>
                <cite>- Vincent Van Gogh</cite>
                <hr />
            </section>

            <section class="intro">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius modi assumenda, consequatur incidunt asperiores quas exercitationem ut voluptates repellat voluptas magnam perferendis cum cumque nesciunt laboriosam atque vitae accusantium.</p>
            </section>

            <PostsSection className='blog' title="Our Recent Posts">
                {posts.map(postData => <Post {...postData} />)}
            </PostsSection>

            <PostsSection className='events' title="Our Recent Events">
                {events.map(postData => <Post {...postData} />)}
            </PostsSection>
        </main>

        <footer>
            <Footer />
        </footer>
    </>
}