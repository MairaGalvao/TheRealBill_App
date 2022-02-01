import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import "../css/package.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const PackageInfo = () => {
  let history = useHistory();
  return (
    <>
      <header>
        <div>
          <h1>Lifestyle Packages information</h1>
          <p>👇 Scroll down to see the details of the packages</p>
        </div>
      </header>
      <main>
        <ul id="cards">
          <li class="card" id="card_1">
            <div class="card__content">
              <div>
                <h2>Low package</h2>
                <p>
                  {" "}
                  Low Package consists of 40 items. Following is a brief
                  description of a few items: In addition to getting an
                  apartment outside the City Center, basic bills and a simple
                  list from the supermarket, it offers a few inexpensive options
                  for dining out.
                </p>
                <p>
                  <a href="#top" class="btn btn--accent">
                    Read more
                  </a>
                </p>
              </div>
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1589927725301-dda06a332802?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=449&q=80"
                  alt="Image description"
                />
              </figure>
            </div>
          </li>
          <li class="card" id="card_2">
            <div class="card__content">
              <div>
                <h2>Medium package</h2>
                <p>
                  {" "}
                  Medium Package consists of 40 items. Following is a brief
                  description of a few items: In the City Center, a one-room
                  apartment comes with some basic utilities, as well as a
                  fitness center and cinema tickets. Inexpensive restaurants are
                  available in this package, along with a supermarket list.
                </p>
                <p>
                  <a href="#top" class="btn btn--accent">
                    Read more
                  </a>
                </p>
              </div>
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1555158466-7c2c41ead3b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                  alt="Image description"
                />
              </figure>
            </div>
          </li>
          <li class="card" id="card_3">
            <div class="card__content">
              <div>
                <h2>High package</h2>
                <p>
                  High Package consists of 45 items. Following is a brief
                  description of a few items: A three room apartment located in
                  the City Center with some basic utilities, tennis courts, a
                  fitness center, as well as a cinema and other entertainment
                  options. Both expensive and inexpensive restaurants are
                  available in this package, along with a variety of restaurant
                  items as well as an extended supermarket list.
                </p>
                <p>
                  <a href="#top" class="btn btn--accent">
                    Read more
                  </a>
                </p>
              </div>
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1551802047-5cae3493daa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
                  alt="Image description"
                />
              </figure>
            </div>
          </li>
        </ul>
      </main>
      <Button
        style={{
          height: "30px",

          width: "auto",
          color: "#cce0a4",
          backgroundColor: "#0cc0a4",
          fontSize: "1.0rem",
          fontFamily: "Montserrat",
        }}
        onClick={() => {
          history.push(`/`);
        }}
      >
        {" "}
        Back{" "}
      </Button>
    </>
  );
};
