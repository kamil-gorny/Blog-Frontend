<template>
  <div class="container">
    <PostHeader :title="post.title" :author="post.author" :authorImage="post.authorImage" :post-image="post.postImage"
                :creationDate="post.creationDate"/>
    <div class="post" v-html="markdownToHtml"></div>
    <Newsletter/>
    <SocialsBar/>
    <AddComment />
  </div>
</template>

<script>
import {marked} from 'marked';
import hljs from "highlight.js";
import PostHeader from "@/components/PostHeader";
import Newsletter from "@/components/Newsletter";
import SocialsBar from "@/components/SocialsBar";
import AddComment from "@/components/AddComment";

export default {
  name: "Post",
  components: {
    PostHeader,
    Newsletter,
    SocialsBar,
    AddComment
  },

  data() {
    return {
      post: {},
      markdown: "File upload vulnerabilities\t\n" +
          "\n" +
          "## Remote code execution via web shell upload\n" +
          "\n" +
          "The best scenario for an attacker is when attacker is allowed to upload server-side script and execute it on server side.\n" +
          "\n" +
          "Example website allows us to upload profile image and doesnt check for file type. As a result we can upload script shell.php that looks like this \n" +
          "<code class=\"formatcode\">\n" +
          "```php\n" +
          "<?php echo file_get_contents('/path/to/target/file'); ?>\n" +
          "```\n" +
          "</code>\n" +
          "and read files from server \n" +
          "\n" +
          "## Web shell upload via Content-Type restriction bypass\n" +
          "\n" +
          "Sometimes webservers try to validate uncoming files based on content-type header, problem occures when it is trusted by webserver and content-type isnt checked with actual file wheter it is what it says it is\n" +
          "\n" +
          "![321985facb1c027c197ee218f7145a98.png](:/ed33bb9e72ae4bb69230789a60693b3f)\n" +
          "\n" +
          "When something like this occures we can trick server to think that we are uploading image when in reality we are uploading script\n" +
          "\n" +
          "## Web shell upload via path traversal\n" +
          "\n" +
          "Sometimes servers block code execution in directories that shouldn't execute code for example the ones responsible for storing profile images. But sometimes we are able to manipulate the request and change the location to other folder (eg. Folder above) \n" +
          "\n" +
          "`Rember there might still be some filtering in place so try various encodings like URL encoding or double URL encoding`\n" +
          "\n" +
          "![2e90122ead6adb3aaeb876bcae120665.png](:/8732fbc4f2a948e2a44060dc610e1295)\n" +
          "\n" +
          "## Web shell upload via extension blacklist bypass\n" +
          "\n" +
          "Change the value of the filename parameter to .htaccess.\n" +
          "Change the value of the Content-Type header to text/plain.\n" +
          "Replace the contents of the file (your PHP payload) with the following Apache directive:\n" +
          "\n" +
          "AddType application/x-httpd-php .l33t\n" +
          "This maps an arbitrary extension (.l33t) to the executable MIME type application/x-httpd-php. As the server uses the mod_php module, it knows how to handle this already.\n" +
          "\n" +
          "Send the request and observe that the file was successfully uploaded.\n" +
          "Use the back arrow in Burp Repeater to return to the original request for uploading your PHP exploit.\n" +
          "Change the value of the filename parameter from exploit.php to exploit.l33t. Send the request again and notice that the file was uploaded successfully.\n" +
          "\n"
    }
  },
  computed: {
    markdownToHtml(){
      return marked(this.markdown, {
        langPrefix: 'hljs lang-',
        highlight: function(markdown) {
          return hljs.highlightAuto(markdown).value
        }});
    }
  },

  async beforeRouteEnter(to, from, next) {
    const res = await fetch(`http://kamilgorny.azurewebsites.net/api/posts/${to.params.id}`);
    next(async vm => {
      vm.post = await res.json();
    });
  }
}
</script>

<style scoped>
@import "../assets/vs2015.css";

.container {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.post{
  margin-left: auto;
  margin-right: auto;
}
</style>