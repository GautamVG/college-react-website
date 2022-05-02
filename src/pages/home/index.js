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
                <blockquote>Normality is a paved road: It's comfortable to walk, but no flowers grow</blockquote>
                <cite>- Vincent Van Gogh</cite>
                <hr />
            </section>

            <section class="intro">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ducimus distinctio, in ullam deleniti dolorem itaque nulla. Voluptatem iste ut beatae nostrum iusto quaerat voluptates ea eos, eligendi, similique vitae porro voluptas repellat. Odit maiores recusandae soluta tempore repellat! Necessitatibus minus unde delectus? Harum quas neque voluptatem architecto incidunt cum voluptas doloremque libero velit provident aliquam debitis commodi tenetur quos ipsa sed sit inventore temporibus maxime porro esse, odit accusantium molestias enim. Ratione repellat quaerat cumque praesentium! Itaque amet qui animi omnis eos. Magnam, hic officia. Doloremque a vero eaque? Commodi rem libero optio architecto, quia cum repellendus consequuntur adipisci cumque aut consequatur quod minima fuga accusamus velit assumenda blanditiis laboriosam vitae eaque tempora harum itaque quasi. Excepturi fugiat explicabo quos cupiditate dicta, ipsa enim nemo quam earum autem sapiente neque assumenda laudantium reprehenderit repellendus. Amet laboriosam sint natus deserunt repellendus esse harum ea quis fugit veniam expedita debitis ullam qui modi, commodi explicabo atque libero? Qui nemo numquam rem laborum vitae voluptatum doloremque, deleniti fugiat dicta culpa, odio necessitatibus, placeat similique aspernatur cumque quas eos nesciunt magni! Asperiores ad, omnis voluptate unde dolor deleniti consequatur itaque. Ratione natus laudantium dignissimos autem voluptatem magni, magnam commodi placeat odio non optio!</p>
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