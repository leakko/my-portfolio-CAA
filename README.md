<img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_blau_uoc.png" alt="UOC Logo" width="200"/>

<section>
    <h1>MY PERSONAL PORTFOLIO</h1>
    <p>
        This is a Continuous Assesment Activity of the <a href="https://www.uoc.edu/portal/_resources/common/imatges/sala_de_premsa/noticies/2016/202-nova-marca-uoc.jpg">Techniques for Software Application Development Degree</a>
    </p>
</section>
<section>
    <h2>Code Explanation</h2>
    <div>
        <h3>General Specifications</h3>
            <ul>
                <li>
                    We divide the <code>&#60;body&#62;</code> in 3 main sections, <code>&#60;header&#62;</code>, <code>&#60;main&#62;</code> and <code>&#60;footer&#62;</code>
                </li>
                <li>We remove the default <code>&#60;body&#62;</code></li> margin
                    <code>
                        <pre>
                            body {
                                margin: 0;
                                color:  #0c0c0d;
                            }
                        </pre>
                    <code>
                <li>
                    Inside each section, we use a <code>&#60;div&#62;</code> element with class <i>container</i> to limit the  width of all the website's information to 1000px, and to center it.
                    In this way, we can apply a border to each section to draw a dividing line that takes up the whole viewport width, and then make the content inside each section narower and centered.
                    <code>
                        <pre>
                            .container {
                                max-width: 1000px;
                                margin: 0 auto;
                            }
                        </pre>
                    <code>
                </li>
            </ul>
        <h3>Header</h3>
            <ul>
                <li>
                    We make all the text inside bold, divide the <code>&#60;header&#62;</code> form the <code>&#60;main&#62;</code> using a border and finally we make it wider.
                    <code>
                        <pre>
                            header {
                                font-weight: bold;
                                border-bottom: 1px solid rgba(128, 128, 128, 0.5);
                                padding: 15px 0;
                            }
                        </pre>
                    <code>
                </li>
                <li>
                    We make all the divs inside the header a flex box, so the three elements place one next to each other. Then we add space between these elements forcing them to take the whole space of the container. Finally, we make the elements align vertically next to each other.
                    <code>
                        <pre>
                            header .container,
                            header div {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                            }
                        </pre>
                    <code>
                </li>
                <li>
                    We make tha navbar (central section of the header) take up 35% of the container space, so there is space between the 3 nav items.
                    <code>
                        <pre>
                            nav {
                                width: 35%;
                            }
                        </pre>
                    <code>
                </li>
                <li>
                    Now that the navbar have space, we turn it into a flexbox so each nav item place next to each other. We remove the list bullets. Finally, we give space between the elements inside the navbar.
                    <code>
                        <pre>
                            nav ul {
                                display: flex;
                                list-style: none;
                                justify-content: space-between;
                            }
                        </pre>
                    <code>
                </li>
                <li>
                    Finally, we select only the first <code>&#60;div&#62;</code> inside the header (the logo and title), and make its font blue and a little bigger.
                    <code>
                        <pre>
                            header .container div:first-child {
                            font-size: 1.5rem;
                            color: #1b1fff;
                        }
                        </pre>
                    <code>
                </li>
            </ul>
    </div>
</section>