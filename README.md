<link rel="stylesheet" href="css/readme-styles.css">

<img src="https://www.uoc.edu/portal/_resources/common/imatges/sala_de_premsa/noticies/2016/202-nova-marca-uoc.jpg" alt="UOC Logo" width="200" id="uoc-logo"/>

<!-- INTRO SECTION -->
<section>
    <h1>MY PERSONAL PORTFOLIO</h1>
    <p>
        This is a Continuous Assesment Activity of the <a href="https://www.uoc.edu/portal/_resources/common/imatges/sala_de_premsa/noticies/2016/202-nova-marca-uoc.jpg">Techniques for Software Application Development Degree</a>
    </p>
</section>
<!-- NAV BAR -->
<section id="nav">
    <ul>
        <li>
            <button>
                <a  class="button" href="#header">Header</a>
            </button>
        </li>
        <li>
            <button>
                <a class="button" href="#footer">Footer</a>
            </button>
        </li>
        <li>
            <button>
                <a class="button" href="#about">About Page</a>
            </button>
        </li>
    </ul>
</section>
<!-- GENERAL SPECIFICATIONS -->
<section>
        <h1>General Specifications</h1>
            <ul>
                <li>
                    <p>
                        We divide the <code>&#60;body&#62;</code> in 3 main sections, <code>&#60;header&#62;</code>, <code>&#60;main&#62;</code> and <code>&#60;footer&#62;</code>
                    </p>
                </li>
                <li>
                    <p> 
                        We remove the default <code>&#60;body&#62;</code> margin and set the default text color of the document.
                    </p>
<pre>
    <code>
        body {
            margin: 0;
            color:  #0c0c0d;
        }
    </code>
</pre>
                </li>
                <li>
                    <p>
                        Inside each section, we use a <code>&#60;div&#62;</code> element with class <i>container</i> to limit the  width of all the website's information to 1000px, and to center it.
                        In this way, we can apply a border to each section to draw a dividing line that takes up the whole viewport width, and then make the content inside each section narower and centered.
                    </p>
<pre>
    <code>
        .container {
            max-width: 1000px;
            margin: 0 auto;
        }
    </code>
</pre>
                </li>
            </ul>
            <!-- 
            HEADER
            -->
            <h2 id="header">Header</h2>
            <img 
            src="images/screenshots/header.png"
            >
                <ul>
                    <li>
                        The header is composed of three elements, two <code>&#60;div&#62;</code>s and a central <code>&#60;nav&#62;</code>, that represents a navigation menu that allows the user to change between the 3 pages.
                        Each <code>&#60;div&#62;</code> is composed of one image and one <code>&#60;p&#62;</code>.
                        With the next CSS ruleset we make the two elements inside each <code>&#60;div&#62;</code> get aligned next to each other.
<pre>
    <code>
        header .container,
        header div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        }
    </code>
</pre>              
                        With this rule, we also make the <code>&#60;div class="container"&#62;</code> inside the header a flex box, so the two <code>&#60;div&#62;</code>s and the <code>&#60;nav&#62;</code> place next to each other. Then with the <i>justif-content</i> property we add space between these elements forcing them to take the whole space of the container. Finally, we make the elements align vertically next to each other.
                    </li>
                    <li>
                        The central navbar has one <code>&#60;ul&#62;</code>, whose <code>&#60;li&#62;</code>s has one <code>&#60;a&#62;</code> inside to link to the rest of the pages.
                    </li>
                    <li>
                        We make all the text inside the header bold and divide the <code>&#60;header&#62;</code> from the <code>&#60;main&#62;</code> using a border.
                        Then we add some space at the left and right of the header and make the header text bigger.
    <pre>
        <code>
            header {
                font-weight: bold;
                border-bottom: 1px solid rgba(128, 128, 128, 0.5);
                padding: 0 10px;
                font-size: 1.1rem;
            }
        </code>
    </pre>
                    </li>
                    <li>
                        We make tha navbar (central section of the header) take up 35% of the container space, so there is space between the 3 <code>&#60;li&#62;</code>s inside the navbar.
    <pre>
        <code>
            nav {
                width: 35%;
            }
        </code>
    </pre>
                    </li>
                    <li>
                        Now that the navbar have space, we turn it into a flexbox so each nav item place next to each other. We remove the list bullets. Finally, we give space between the elements inside the navbar.
    <pre>
        <code>
            nav ul {
                display: flex;
                list-style: none;
                justify-content: space-between;
            }
        </code>
    </pre>
                    </li>
                    <li>
                        We make blue the nav items when the user hover them, or when it's the page that the user it's currently visiting (because the active item has no href attribute)
    <pre>
        <code>
            header a:not(a[href]),
            header a:hover {
            color: #0019ff;
        }
        </code>
    </pre>
                    </li>
                     </li>
                    <li>
                        We remove the default anchor color and underline.
    <pre>
        <code>
            header a {
                color: #0c0c0d;
                text-decoration: none;
            }
        </code>
    </pre>
                    </li>
                    <li>
                        Finally, we select only the first <code>&#60;div&#62;</code> inside the header (the logo and title), and make its font blue and a little bigger.
    <pre>
        <code>
            header .container div:first-child {
                font-size: 1.5rem;
                color: #1b1fff;
            }
        </code>
    </pre>
                    </li>
                </ul>
        <!-- 
            FOOTER
            -->
            <h2 id="footer">Footer</h2>
            <img 
            src="images/screenshots/footer.png"
            >
                <ul>
                    <li>
                        The <code>&#60;footer&#62;</code> is composed of only two <code>&#60;p&#62;</code>s, one for each line of text.
                        In the second line, we have an <code>&#60;a&#62;</code> with the <i>href</i> attribute set to <i>_blank</i>, so that the page opens in a new tab.
                    </li>
                    <li>
                        We turn the <code>&#60;footer&#62;</code> into a flexbox, and use the flex-direction to place each <code>&#60;p&#62;</code> above each other. Then we can use <i>justify-content</i> and <i>align-items</i> together to plce both lines in the center of the <code>&#60;footer&#62;</code>.
                        Then we give some space at the top and bottom, and finally we add a <i>border-top</i> to ivide the <code>&#60;footer&#62;</code> from the <code>&#60;main&#62;</code> section.
    <pre>
        <code>
            footer {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px 0;
                border-top: 1px solid rgba(128, 128, 128, 0.5);
            }
        </code>
    </pre>
                    </li>
                    <li>
                       We set the default color of the link that is inside the footer, and remove the underline, because we will use it when the user hovers the <code>&#60;a&#62;</code> to indicate him that is clickable.
    <pre>
        <code>
            footer a {
                color:  #0019ff;
                text-decoration: none;
            }
            footer a:hover {
                text-decoration: underline;
            }
        </code>
    </pre>
                    </li>
                </ul>
        <!-- 
            'ABOUT' PAGE MAIN
            -->
            <h2 id="about">About Page</h2>
            <img 
            src="images/screenshots/about-page.png"
            >
            <ul>
                <li>
                    The <code>&#60;main&#62;</code> section of 'About' page is composed of five <code>&#60;section&#62;</code>s
                    <ul>
                        <li>Presentation (top left)</li>
                        <li>Picture (top right)</li>
                        <li>Experiences (middle left)</li>
                        <li>Education (middle right)</li>
                        <li>Customers experience (bottom)</li>
                    </ul>
                </li>
                <li>
                    In the prensentation <code>&#60;section&#62;</code> we have two <code>&#60;p&#62;</code>s, with a <code>&#60;h1&#62;</code> between them, and below all of them, a <code>&#60;div&#62;</code> containing two <code>&#60;a&#62;</code>s, each containing a <code>&#60;button&#62;</code> inside.
                </li>
                <li>
                    The picture <code>&#60;section&#62;</code> is just a container for an <code>&#60;img&#62;</code>.
                </li>
                <li>
                    Both Experiences and Education <code>&#60;section&#62;</code>s are marked up in a similar way.
                    First they have a <code>&#60;h2&#62;</code> and then a a div that represents the line that will go through the dates' circles.
                    Finally a collection of <code>&#60;div&#62;</code>s, where each one represents an experience/education item.
                    Inside each of them we have to <code>&#60;div&#62;</code>s, one containing the date, and the other, the rest of the information.
                    This second <code>&#60;div&#62;</code> is composed of another <code>&#60;div&#62;</code> for the headings, and a <code>&#60;p&#62;</code> for the experience/education description.
                </li>
                <li>
                    Finally, at the bottom of the page it's the curstomers opinion <code>&#60;section&#62;</code>, that it's just a <code>&#60;h1&#62;</code>, and below, a <code>&#60;blockquote&#62;</code>, with a <code>&#60;p&#62;</code> and a <code>&#60;cite&#62;</code> inside.
                </li>
            </ul>
</section>
<section>

</section>