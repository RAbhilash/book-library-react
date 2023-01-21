import "./overview.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";
import BookCard from "../../pages/allbooks/book card/bookCard";

function overview() {
  const arr = useRef(['first', 'second', 'third', 'third'])
  return (
    <div id="overview">
      <div id="quote">
        <p>
          You are the shuckiest shuck faced shuck in the world!” “I'm
          unpredictable, I never know where I'm going until I get there, I'm so
          random, I'm always growing, learning, changing, I'm never the same
          person twice. But one thing you can be sure of about me; is I will
          always do exactly what I want to do.
        </p>
      </div>
      <div id="stats">
        {/* <Link to='/allbooks'>
          <h2>
            Nothing yet... <br />
            Start building your library{"->"}
          </h2>
        </Link> */}
        <div id="stats-flex-helper">
          <div id="stats-current">
            {
              arr.current.map(ele => <BookCard content={ele} />)
            }
          </div>
          <div id="stats-lower-row">
            <div id="stats-total">
              <h2>Total books read</h2>
              <span>20</span>
            </div>
            <div id="stats-pending">
              <h2>Total books read</h2>
              <span>20</span>
            </div>
            <div id="stats-reading">
              <h2>Total books read</h2>
              <span>20</span>
            </div>
          </div>
        </div>
      </div>
      <div id="gif">
        <img
          src="https://media.tenor.com/9XiRPDIVL-EAAAAd/trashcan-animation-random.gif"
          alt=""
        />
      </div>
    </div>
  );
}

export default overview;
