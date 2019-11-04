const path = require('path');
const pages = [
  { id: 1, content: 'Gatsby 로 블로그 만들기' },
  { id: 2, content: '거기에 타입스크립트 적용 해 보기' },
  { id: 3, content: '확실히 어렵네요' },
];

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const templateComponent = path.resolve('src/pages/post-templates.js');
  pages.forEach(page => {
    createPage({
      path: page.id.toString(),
      context: "page",
      component: templateComponent
    })
  })
};