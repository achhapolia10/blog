import React from 'react'
import ReactMarkdown from 'react-markdown'
const hljs = require('highlight.js')
const markdown = require('markdown-it')({
  html:true,
  linkify:true,
  typographer:false,
  highlight: function (str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value;
    } catch (__) {}
  }

  return ''; // use external default escaping
}
}).use(require('markdown-it-emoji'))

const Card = (props) => {
  console.log(props)
    const markdownContent = markdown.render(props.content )
    return(
        <div className='card-tb'>
            <div className='head-card'>
                <div className='photo'>
                </div>
                <div>
                <div className='photo-details'>
                <div className='photo-name'>
                        Shizuka
                    </div>
                    <div className='des'>
                        Engineer
                    </div>
                </div>
                </div>
            </div>
            <div className='gradient'></div>
            <div className='writeup'>
              <div className={'content markdown'} dangerouslySetInnerHTML={{__html:markdownContent}}></div>
            </div>
          <div className="read-more"><div className="button">... Read More</div></div>
        </div>
    )
}

export default Card
