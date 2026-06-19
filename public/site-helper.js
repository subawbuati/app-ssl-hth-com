(function() {
  const CONFIG = {
    baseUrl: 'https://app-ssl-hth.com',
    keyword: 'hth',
    site: {
      title: 'hth 访问助手',
      notice: '本站使用安全连接，请确保浏览器地址栏显示锁形图标。',
      tips: [
        '建议使用 Chrome、Edge 或 Firefox 最新版本。',
        '访问时如有疑问，可查看页面底部的联系入口。',
        '关键词 “hth” 可用于快速搜索相关内容。'
      ]
    }
  };

  function createBadge(text) {
    const badge = document.createElement('span');
    badge.className = 'hth-badge';
    badge.textContent = text;
    Object.assign(badge.style, {
      display: 'inline-block',
      backgroundColor: '#f0ad4e',
      color: '#fff',
      padding: '2px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: 'bold',
      margin: '2px 4px',
      whiteSpace: 'nowrap'
    });
    return badge;
  }

  function createCard(heading, contentEl) {
    const card = document.createElement('div');
    card.className = 'hth-card';
    Object.assign(card.style, {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '12px 0',
      backgroundColor: '#fafafa',
      boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
      fontSize: '14px',
      lineHeight: '1.6'
    });

    const title = document.createElement('h4');
    title.textContent = heading;
    Object.assign(title.style, {
      margin: '0 0 8px 0',
      fontSize: '16px',
      color: '#333'
    });
    card.appendChild(title);

    if (contentEl) {
      card.appendChild(contentEl);
    }
    return card;
  }

  function renderNotice() {
    const container = document.querySelector('.site-helper-container') || document.body;
    const section = document.createElement('div');
    section.className = 'hth-section';
    Object.assign(section.style, {
      maxWidth: '720px',
      margin: '20px auto',
      padding: '0 16px'
    });

    // —— 提示卡片 ——
    const tipList = document.createElement('ul');
    Object.assign(tipList.style, {
      paddingLeft: '20px',
      margin: '4px 0'
    });
    CONFIG.site.tips.forEach(tip => {
      const li = document.createElement('li');
      li.textContent = tip;
      tipList.appendChild(li);
    });
    const noticeCard = createCard('💡 访问说明', tipList);
    section.appendChild(noticeCard);

    // —— 关键词徽章 ——
    const badgeContainer = document.createElement('div');
    Object.assign(badgeContainer.style, {
      marginTop: '8px'
    });
    const keywords = [CONFIG.keyword, 'hth 安全', 'hth 帮助'];
    keywords.forEach(kw => {
      badgeContainer.appendChild(createBadge(kw));
    });
    const badgeCard = createCard('🏷️ 关键词', badgeContainer);
    section.appendChild(badgeCard);

    // —— 链接提示 ——
    const linkPara = document.createElement('p');
    linkPara.textContent = '🔗 相关地址：';
    const linkAnchor = document.createElement('a');
    linkAnchor.href = CONFIG.baseUrl;
    linkAnchor.textContent = CONFIG.baseUrl;
    linkAnchor.target = '_blank';
    linkAnchor.rel = 'noopener noreferrer';
    Object.assign(linkAnchor.style, {
      color: '#1a73e8',
      textDecoration: 'none'
    });
    linkPara.appendChild(linkAnchor);
    const linkCard = createCard('🌐 访问入口', linkPara);
    section.appendChild(linkCard);

    // —— 安全提示 ——
    const noticePara = document.createElement('p');
    noticePara.textContent = CONFIG.site.notice;
    Object.assign(noticePara.style, {
      color: '#555',
      fontStyle: 'italic'
    });
    const securityCard = createCard('🔒 安全提醒', noticePara);
    section.appendChild(securityCard);

    container.appendChild(section);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNotice);
  } else {
    renderNotice();
  }
})();