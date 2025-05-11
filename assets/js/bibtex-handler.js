// 存储BibTeX内容的对象
const bibtexData = {
  "ReQFlow": `@article{yue2025reqflow,
  title={Reqflow: Rectified quaternion flow for efficient and high-quality protein backbone generation},
  author={Yue, Angxiao and Wang, Zichong and Xu, Hongteng},
  journal={arXiv preprint arXiv:2502.14637},
  year={2025}
}`
  // 您可以添加更多论文的BibTeX内容
};

function copyBibtex(paperKey) {
  const bibtex = bibtexData[paperKey];
  if (bibtex) {
    // 复制到剪贴板
    navigator.clipboard.writeText(bibtex).then(() => {
      // 显示成功消息
      const copyBtn = document.getElementById(`bibtex-btn-${paperKey}`);
      const originalText = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    });
  }
} 