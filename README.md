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
            max-width: 1140px;
            margin: 0 auto;
        }
    </code>
</pre>
                </li>
                <li>
                    <p>
                        We use the <code>&#60;p&#62;</code> as the default element to wrap text in the website, so by setting its size here, we set the default <i>font-size</i> of the document.
                    </p>
<pre>
    <code>
        p {
            font-size: 18px;
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
                padding: 15px 10px;
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
            <h1 id="about">About Page</h1>
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
                <li>
                        Regarding CSS, we turn the <code>&#60;main&#62;</code>'s information container into a gird, and the split this grid in 12 columns of the same width. Then we add some space at the top and bottom.
                        Finally, we give <i>50px</i> of space between the three rows we will create.
    <pre>
        <code>
            .about .container {
                display: grid;
                grid-template-columns: repeat(12, 1fr);
                padding: 50px 0;
                row-gap: 50px;
            }
        </code>
    </pre>
                </li>
                <li>
                       We set the font sizes of all the headings of the page, and slightly change the color of the level one heading.
    <pre>
        <code>
            .about h1 {
                font-size: 40px;
                color: #212121;
            }
                .about h2 {
                font-size: 38px;
            }
                .about h3 {
                font-size: 28px;
            }
        </code>
    </pre>
                </li>
                <li>
                       We set the font sizes of all the headings of the page, and slightly change the color of the level one heading.
    <pre>
        <code>
            .about h1 {
                font-size: 40px;
                color: #212121;
            }
                .about h2 {
                font-size: 38px;
            }
                .about h3 {
                font-size: 28px;
            }
        </code>
    </pre>
                </li>
                <li>
                       We set the position of the upper left section to take up 7 columns.
    <pre>
        <code>
            .presentation {
                grid-column: 1 / 8;
            }
        </code>
    </pre>
                </li>
                <li>
                       Then we give styles to the buttons of this section.
                       First we make them bigger using <i>padding</i>.
                       Then we make them rounded and set the color of background and the font.
                       We remove the default border-style of HTML buttons, and finally, make he text inside the buttons bold.
    <pre>
        <code>
            .presentation button {
                padding: 10px 20px;
                border-radius: 25px;
                background-color: #474559;
                color: white;
                border-style: none;
                font-weight: bold;
            }
        </code>
    </pre>
                </li>
                <li>
                       We remove the default styles of <code>&#60;a&#62;</code>s.
    <pre>
        <code>
            .presentation a {
                color: white;
                text-decoration: none;
            }
        </code>
    </pre>
                </li>
                <li>
                       Now we style the first button.
                       We give some space between it and the second one.
                       Then we give some space inside the button's left side, and them we use that space to place the download icon as a background image, and behind, the regular button background color.
    <pre>
        <code>
            .presentation a:first-child button {
                margin-right: 10px;
                padding-left: 40px;
                background: 
                url(../images/download.png) no-repeat 20px center/12px,
                #474559
                ;
            }
        </code>
    </pre>
                </li>
                <li>
                       We create a hover effect on buttons by turning the cursor into a pointer and changing the background color.
    <pre>
        <code>
            .presentation button:hover {
                cursor: pointer;
                background: #0019ff;
            }
        </code>
    </pre>
                </li>
                <li>
                       The previous rule would remove the first button download icon, so we will have to set a specific background for when the first button is hovered.
    <pre>
        <code>
            .presentation a:first-child button:hover {
                background: 
                url(../images/download.png) no-repeat 20px center/12px,
                #0019ff
                ;
            }
        </code>
    </pre>
                </li>
                <li>
                       Finally we set a specific color for my name and surname.
    <pre>
        <code>
            .presentation h1 span {
                color: #0019ff;
            }
        </code>
    </pre>
                </li>
                <li>
                       Now we have a couple rulesets to style the image section.
                       We place it in the remaining space at the first row.
                       Then, we make the actual image take up only 90% of this space, and then float to the right so we have space between the twoupper sections.
    <pre>
        <code>
            .ux-designer {
                grid-column: 8 / 13;
            }
                .ux-designer img {
                width: 90%;
                float: right;
            }
        </code>
    </pre>
                </li>
                <li>
                       Regarding Experiences/Education section, we make it take up the first 6 columns of the next available row (the second one).
                       We give some space with the Education section.
                       Finally, we set the position to relative, in order to preserve its current position, but allowing to place the line that goes through the dates in an absolute way, bout relative to this this section, not the viewport.
    <pre>
        <code>
            .experiences {
                grid-column: 1 / 7;
                padding-right: 20px;
                position: relative;
            }
        </code>
    </pre>
                </li>
                <li>
                    Then we give the empty <code>&#60;div&#62;</code> with <i>class="line"</i> a width of <i>3px</i> and a height enough to go through all dates' circles.
                    It's important to set the height value using a percentage, because if the viewport gets smaller, and therefore tge experiences/education <code>&#60;section&#62;</code> streches up and gets higher, the line will get longer too.
    <pre>
        <code>
            .line {
                width: 3px;
                height: 65%;
                top: 150px;
                left: 33px;
                background-color: #474559;
                position: absolute;
                z-index: -1;
            }
        </code>
    </pre>
                </li>
                <li>
                    We make the each experience/education item a flexbox, so the date is placed next to the information itself.
                    Then we make both divs align to the left.
    <pre>
        <code>
            .list-item {
                display: flex;
                align-items: start;
            }
        </code>
    </pre>
                </li>
                <li>
                    Now we give a margin to all items except the first one, so we give space between them.
    <pre>
        <code>
            .list-item:nth-child(n+2) {
                margin-top: 35px;
            }
        </code>
    </pre>
                </li>
                <li>
                    Now we give a margin to all items except the first one, so we give space between them.
    <pre>
        <code>
            .list-item:nth-child(n+2) {
                margin-top: 35px;
            }
        </code>
    </pre>
                </li>
                <li>
                    We remove the default top margins from headings.
    <pre>
        <code>
            .list-item h2,
            .list-item h3,
            .list-item h4 {
                margin-top: 0;
            }
        </code>
    </pre>
                </li>
                <li>
                    We turn the title's section of each experience/education into a flexbox, so the company/school get placed next to the experience/education main title.
                    Then, we align them to the center in the y-axis
    <pre>
        <code>
            .list-item .title {
                display: flex;
                align-items: center;
            }
        </code>
    </pre>
                </li>
                <li>
                    Now we give some space between the experience/education item title and the company/school name., and we also remove the bottom margin.
    <pre>
        <code>
            .list-item .title h3 {
                margin-right: 15px;
                margin-bottom: 0;
            }
        </code>
    </pre>
                </li>
                <li>
                    Regarding the company/school name, we give it an specific font colot, we make it smaller, also remove the bottom margin, and finally, we set the position to relative to be able to move it down a little bit.
    <pre>    
        <code>
            .list-item .title h4 {
                color: #474559;
                font-size: 14px;
                margin-bottom: 0;
                position: relative;
                top: 2px;
            }
        </code>
    </pre>
                </li>
                <li>
                    Talking about the dates' circles, we give them a blue background, add the same padding to all sides of the date to make the date's <code>&#60;div&#62;</code> bigger but squared.
                    Now we set the <i>border-radius</i> to 50% in order to create a circle.
                    We set the font color to white, make the font semi-bold and add some margin-right to give space between the circle and the item information. 
    <pre>
        <code>
            .date {
                background-color: #0019ff;
                padding: 15px;
                border-radius: 50%;
                color: white;
                font-weight: 600;
                margin-right: 25px;
            }
        </code>
    </pre>
                </li>
                <li>
                    We give some margin at the top and bottom of the <code>&#60;p&#62;</code> to give more height to the <code>&#60;div&#62;</code>, turning it into an square. 
    <pre>    
        code>
            .date p {
                margin: 10px 0;
            }
        </code>
    </pre>
                </li>
                <li>
                    Then we remove the default color of the <i>toolplate</i> <code>&#60;a&#62;</code> and the default underline.
    <pre>    
        <code>
            .list-item a {
                color: unset;
                text-decoration: none;
            }
        </code>
    </pre>
                </li>
                <li>
                    Talking specially about the Education <code>&#60;section&#62;</code>, we place it in the right half of the second row.
                    Then we give some space between this <code>&#60;section&#62;</code> and the Experiences one.
    <pre>    
        <code>
            .education {
                grid-column: 7 / 13;
                padding-left: 40px;
                position: relative;
            }
        </code>
    </pre>
                </li>
                <li>
                    We place this second line to go exactly behind the Education dates.
    <pre>    
        <code>
            .education .line {
                left: 73px;
                height: 45%;
            }
        </code>
    </pre>
                </li>
                <li>
                    Finally, talking about the last <code>&#60;section&#62;</code> of the 'About' page, we place it in the thrid row, from the 3rd to the 11th column.
                    We turn it into a flexbox, and set the direction to column, so the <code>&#60;h2&#62;</code> get placed above the <code>&#60;blockquote&#62;</code>.
                    Then we place them in the center of the <code>&#60;section&#62;</code>.
                    Now we set it's position to relative, in order to control the position of absolute positioned nested elements better.
                    Finally we add some space between this <code>&#60;section&#62;</code> and the <code>&#60;footer&#62;</code>.
    <pre>                
        <code>
            .customers {
                grid-column: 3 / 11;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                margin-bottom: 35px;
            }
        </code>
    </pre>
                </li>
                 <li>
                    We add some space between the header and the blockquote.
    <pre>    
        <code>
            .customers h2 {
                margin-bottom: 25px;
            }
        </code>
    </pre>
                </li>
                <li>
                    Talking abput the blockquote, we align its text in the center, we set the left quote image as a background-image in the top-center, we add some space inside the blockquote box to make it bigger.
                    We set the position to relative to control the position of absolute positioned nested elements better.
                    Finally we make the font a little bigger.
    <pre>                
        <code>
            blockquote {
                text-align: center;
                background: url(../images/left-quote.png) no-repeat center 2px/50px;
                padding: 50px 25px 25px 25px;
                position: relative;
                font-size: 20px;
            }
        </code>
    </pre>
                </li>
                <li>
                    We turn the name of the quote cite into bold, and remove the default italics style.
    <pre>    
        <code>
            blockquote cite {
                font-style: normal;
                font-weight: bold;
            }
        </code>
    </pre>
                </li>
                <li>
                    To finish with this <code>&#60;section&#62;</code>, we create a pseudo-element as the first child of the blockquote, with no text content and 
                    we set the desired background color. 
                    After that, we skew the box to get that no-squared shape.
                    We set its width and height using percentage values to make the box responsive if the viewport shrinks.
                    Then, we set the position to absolute, so that it gets out of the page flow.
                    Then we place it behind the blockquote text using the <i>bottom</i> and <i>left properties</i>, and finally, we make it place in a deeper layer, avoiding that it covers the text.
    <pre>
        <code>
            blockquote::before {
                content: "";
                background-color: #efefef;
                transform: skew(-30deg);
                width: 120%;
                height: 110%;
                position: absolute;
                bottom: -20px;
                left: -65px;
                z-index: -1;
            }
        </code>
    </pre>
                </li>
            </ul>
</section>
<section>

</section>