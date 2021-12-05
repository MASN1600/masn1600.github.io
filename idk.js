<script lang="ts">
    let srcLogo = '/logo.png';
    let home = '';
    let about = 'https://minecraft.net';
    let theTeam = '';
    function menu() {
        console.log("test");
    }
</script>

<div class="header">
    <img class="logo" src={srcLogo} alt="Ma LOGO" />
    <h1 class="hText">Marin Academy Student Newspaper</h1>
    <ul class="list">
        <li><a on:mouseover="{menu}" on:focus="{menu}" href={home}>Menu</a></li>
        |
        <li><a href={about}>About Us</a></li>
        |
        <li><a href={theTeam}>Who are we?</a></li>
    </ul>
</div>

<div class="test">
    Visit
    <a href="https://kit.svelte.dev"> kit.svelte.dev </a>
    to read the documentation
</div>

<div>hi</div>

<style lang="scss">
    .header {
        position: fixed;
        width: 100%;
        padding-top: 0.4em;
        padding-bottom: 0.4em;
        padding-left: 2.7em;
        background-color: black;
        color: white;
        .hText {
            padding-left: 0.5em;
            display: inline-block;
            font-size: 1.5em;
            align-content: left;
            vertical-align: middle;
        }
        .logo {
            max-width: 2em;
            max-height: 2em;
            vertical-align: middle;
        }
        .list {
            align-content: center;
            display: inline-flex;
            gap: 1em;
            list-style-type: none;
            font-size: 1.3em;
            vertical-align: middle;
            a:link {
                color: white;
            }
            a:visited {
                color: lightgrey;
            }
        }
    }
    .test {
        margin-bottom: 500em;
        background-color: darkgray;
    }
</style>
