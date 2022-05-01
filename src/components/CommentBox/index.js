import { useRef, useState } from 'react';
import './index.css';

export default function() {
    let name = useRef('');
    let email = useRef('');
    let rating = useRef('');
    let comment = useRef('');

    const [helperMsg, setHelperMsg] = useState('');

    const validateCommentBox = () => {
        let validityParams = [
            { // For Email
                passing: /\w@\w/.test(email.current),
                helpMsg: "Email is invalid"
            },
            { // For name
                passing: name.current.length > 3,
                helpMsg: "Name should be longer"
            },
            { // For rating
                passing: rating.current != "",
                helpMsg: "Please select a rating"
            }
        ]

        let failingParam = validityParams.findIndex(param => param.passing == false)
        if (failingParam != -1)
            setHelperMsg(validityParams[failingParam].helpMsg);

        return false;
    }

    return (
        <section class="comment">
            <h2>Leave a comment</h2>
            <form id="comment-box" onsubmit={validateCommentBox}>
                <div class="contact">
                    <div class="name">
                        <label for="name" required>Name</label> <br />
                        <input type="text" id="name" name="name" onChange={e => name.current = e.target.value} />
                    </div>
                    <div class="email">
                        <label for="email" required>Email</label> <br />
                        <input type="text" id="email" name="email" onChange={e => email.current = e.target.value} />
                    </div>
                </div>
                <div class="rating">
                    <label>How did you find this article?</label> <br />
                    <input type="radio" id="inaccurate" name="rating" onChange={e => rating.current = e.target.value} />
                    <label for="inaccurate">Inaccurate</label> <br />
                    <input type="radio" id="decent" name="rating" onChange={e => rating.current = e.target.value} />
                    <label for="decent">Decent</label> <br />
                    <input type="radio" id="good" name="rating" onChange={e => rating.current = e.target.value} />
                    <label for="good">Good</label> <br />
                    <input type="radio" id="excellent" name="rating" onChange={e => rating.current = e.target.value} />
                    <label for="excellent">Excellent</label> <br />
                </div>
                <div class="feedback">
                    <label for="comment">Comment</label> <br />
                    <input type="text" id="comment" name="comment" placeholder="Additional Remarks" onChange={e => comment.current = e.target.value} />
                </div>

                <p class="helper-msg">{helperMsg}</p>

                <input type="submit" id="submit" />
            </form>
        </section>
    )
}