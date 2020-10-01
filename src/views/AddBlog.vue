<template>
    <div class="blogs">
        <div style="margin: 0 auto">
            <h1
                style="
                    margin-left: 20px;
                    margin-top: 20px;
                    font-family: san-serif;
                    color: #563d7c;
                "
            >
                ADD A BLOG
            </h1>
            <br />
            <form method="POST">
                <input
                    id="div"
                    type="text"
                    placeholder="ENTER THE TITLE OF BLOG"
                    required
                />
                <br /><br />

                <input
                    id="div"
                    type="text"
                    placeholder="ADD HASHTAGS IF NECESSARY"
                />
                <br /><br />

                <form>
                    <p style="font: medium; margin-left: -360px">
                        Choose an image
                    </p>
                    <input id="div" type="file" />
                </form>
                <br /><br />
                <textarea
                    id="txt"
                    minlength="100"
                    placeholder="ADD A DESCRIPTION OF THE BLOG"
                    required
                ></textarea>
                <br /><br />

                <input
                    id="sub"
                    type="submit"
                    value="POST!"
                    style="
                        width: 200px;
                        border-radius: 5px;
                        align-content: center;
                    "
                />
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: "blog",
};
</script>

<style scoped>
#div {
    width: 500px;
    height: 70px;
    padding: 15px;
    color: black;
    background-color: white;
    border-radius: 9px;
    font-size: medium;

    float: none;
    align-content: center;
    margin-left: 20px;
    border: 3px solid black;
}
#div:hover {
    background-color: #563d7c;
    color: white;
}
#txt {
    font-size: 14px;
    width: 400px;
    max-width: 525px;
    max-height: 120px;
    min-width: 525px;
    min-height: 120px;
    border-radius: 9px;
    margin-left: 45px;
    border: 3px solid black;
}
#txt:hover {
    background-color: #563d7c;
    color: white;
}
#sub {
    margin-left: 45px;
    /* background-color: plum; */
    font-weight: bold;
    border: 3px solid black;
    background-color: #563d7c;
    color: white;
}
#sub:hover {
    background-color: tomato;
}
.main_nav {
    background-color: #563d7c;
    margin-left: 0px;
    margin-top: 0px;
    box-shadow: 5px 5px 5px black;
}
.main_nav > ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
}
.main_nav > ul > li {
    display: inline-block;
}
.main_nav > ul > li > a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 15px;
    font-family: san-serif;
    font-size: 18px;
}
.main_nav > ul > li > a:hover {
    color: tomato;
}
.icon {
    display: inline-block;
    margin-right: 3px;
    margin-top: 7px;
}
</style>

