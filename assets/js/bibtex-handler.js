// 存储BibTeX内容的对象
const bibtexData = {
  "ReQFlow": `@article{yue2025reqflow,
  title={Reqflow: Rectified quaternion flow for efficient and high-quality protein backbone generation},
  author={Yue, Angxiao and Wang, Zichong and Xu, Hongteng},
  journal={arXiv preprint arXiv:2502.14637},
  year={2025}
}`,
  "OTM": `@inproceedings{gong2025optimal,
  title={An Optimal Transport-based Latent Mixer for Robust Multi-modal Learning},
  author={Gong, Fengjiiao and Yue, Angxiao and Xu, Hongteng},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={39},
  number={16},
  pages={16826--16834},
  year={2025}
}`,
  "QMP": `@inproceedings{yue2024plug,
  title={A plug-and-play quaternion message-passing module for molecular conformation representation},
  author={Yue, Angxiao and Luo, Dixin and Xu, Hongteng},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={38},
  number={15},
  pages={16633--16641},
  year={2024}
}`,
  "USFGW": `@inproceedings{luo2022weakly,
  title={Weakly-supervised temporal action alignment driven by unbalanced spectral fused Gromov-Wasserstein distance},
  author={Luo, Dixin and Wang, Yutong and Yue, Angxiao and Xu, Hongteng},
  booktitle={Proceedings of the 30th ACM International Conference on Multimedia},
  pages={728--739},
  year={2022}
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