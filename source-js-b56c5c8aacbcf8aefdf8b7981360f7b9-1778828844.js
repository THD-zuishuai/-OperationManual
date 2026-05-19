/* Js for https://www.zentao.net/blog/automated-test.html, Version=1778828844 */
 ;if(typeof(v) != "object") v = {};v.theme = {"template":"default","theme":"wide","device":"desktop"};;v.lang = {"confirmDelete":"\u60a8\u786e\u5b9a\u8981\u6267\u884c\u5220\u9664\u64cd\u4f5c\u5417\uff1f","deleteing":"\u5904\u7406\u4e2d","doing":"\u5904\u7406\u4e2d","loading":"\u52a0\u8f7d\u4e2d","updating":"\u66f4\u65b0\u4e2d...","timeout":"\u7f51\u7edc\u8d85\u65f6,\u8bf7\u91cd\u8bd5","errorThrown":"\u6267\u884c\u51fa\u9519\uff1a","continueShopping":"\u7ee7\u7eed\u8d2d\u7269","required":"\u5fc5\u586b","back":"\u8fd4\u56de","continue":"\u7ee7\u7eed","bindWechatTip":"\u53d1\u5e16\u529f\u80fd\u8bbe\u7f6e\u4e86\u7ed1\u5b9a\u5fae\u4fe1\u7684\u9650\u5236\uff0c\u8bf7\u5148\u7ed1\u5b9a\u5fae\u4fe1\u4f1a\u5458\u3002","importTip":"\u53ea\u5bfc\u5165\u4e3b\u9898\u7684\u98ce\u683c\u548c\u6837\u5f0f","fullImportTip":"\u5c06\u4f1a\u5bfc\u5165\u6d4b\u8bd5\u6570\u636e\u4ee5\u53ca\u66ff\u6362\u7ad9\u70b9\u6587\u7ae0\u3001\u4ea7\u54c1\u7b49\u6570\u636e"};;v.path = [1598];;v.categoryID = 1598;;v.pageLayout = "global";;place2d1528bcec28aeec26cd5933b140ee65='IDLIST_PLACEHOLDER85882,85816,85732,85706,85663,85493,85315,85264,85181,85060,IDLIST_PLACEHOLDER';;
$(document).ready(function()
{
    $('.tree .list-toggle').mousedown(function(){$(this).parents('.panel-block').height('auto');})
    $('.row.blocks .tree').resize(function(){$(this).parents('.row.blocks').tidy({force: true});})
})
;setTimeout(function(){$('#contactModal .modal-header .close').html('<span aria-hidden="true">×</span>')}, 500);
$('#contactModal').on('shown.zui.modal', function() {
    if($('.user-dropdown-menu').length > 0)
    {
        $.post(createLink('user', 'behavior'), {
            referrer: document.referrer,
            url: '/contactus',
            title: '联系我们',
            timestamp: Date.parse(new Date()) / 1000
      });
    }
    else
    {
        var userBehaviorData = JSON.parse(localStorage.getItem('userBehavior'));
        if(!userBehaviorData){ userBehaviorData = []; }
        userBehaviorData.push({
            referrer: document.referrer,
            url: '/contactus',
            title: '联系我们',
            timestamp: Date.parse(new Date()) / 1000
        })
        localStorage.setItem('userBehavior', JSON.stringify(userBehaviorData));
    }
});;setTimeout(function(){$('#touchModal .modal-header .close').html('<span aria-hidden="true">×</span>')}, 500);;let page = 'register';
if(location.href.includes('demo'))     page = 'demo';
if(location.href.includes('download')) page = 'download';
if(localStorage.getItem('giftType'))   page = localStorage.getItem('giftType');

const titleMap = {
    register: '注册成功',
    demo: '感谢试用',
    download: '感谢下载'
};
const descMap = {
    register: '注册',
    demo: '试用',
    download: '下载'
};

const tagSrc = `https://static.zentao.net/web/data/source/zentao/default/wide/${page}-tag.png`;
$('.gift-tag').attr('src', tagSrc);
$('.title-success').text(`${titleMap[page]}`);
$('.desc-tips').text(`${descMap[page]}`);
$('.gift-list').addClass(page);

const userID = $.cookie('registerUserID');
let server = Number(userID) % 2 == 1 ? 'liujinlian' : 'songxiao';
$('.service-code').attr('src', `https://static.zentao.net/web/data/source/zentao/default/wide/${server}qiwei.png`);;$(document).ready(function()
{
    /* Set current active topNav. */
    if(v.path && v.path.length)
    {
        $.each(v.path, function(index, category)
        {
            $('.nav-blog-' + category).addClass('active');
        })
    }
  setTimeout(function()
  {
    if(typeof(v.categoryID) != 'undefined') $('#category' + v.categoryID).parent().addClass('active').siblings().removeClass('active');
    if($('.tree li.active').length > 0) $('.tree li.active')[0].scrollIntoView({'block': 'nearest'});
  }, 100);
  $('#navbar li.active').parents('li').addClass('active');

  $('body').tooltip(
  {
      html: true,
      selector: "[data-toggle=tooltip]",
      container: "body"
  });

  var isHasAD     = $('.salon-ad').is(':visible');
  var fixedHeight = isHasAD ? $('.salon-ad').height() + $('.blog-banner').height() - 24 : $('#headTitle').height() + $('.blog-banner').height() + $('.breadcrumb').height() - 24;
  if(!isHasAD) $('.block-article-blogTree .tree').addClass('noAdHeight');

  var treeHeight = $('.block-article-blogTree .tree').height();
  $(window).on('scroll', function()
  {
      var scrollTop = $(window).scrollTop();
      if(scrollTop > 0)
      {
          $('.block-article-blogTree .tree').css('height', treeHeight + scrollTop);
          if(scrollTop > fixedHeight)
          {
              $('.block-article-blogTree .tree').addClass(isHasAD ? 'adFixed' : 'fixed');
              $('.block-article-blogTree .tree').removeAttr('style');
              var footerScroll = $('#footer').offset().top - scrollTop - $(window).height();
              var footerSize = $('#footer').height() + $(window).height();
              if(footerScroll < 0 && footerScroll > -footerSize)
              {
                  var minusHeight = Math.abs($(document).height() - $(window).height() - scrollTop - $('#footer').height());
                  var height      = $('.block-article-blogTree .tree').height() - minusHeight;
                  $('.block-article-blogTree .tree').css('height', height);
              }
          }
          else
          {
              $('.block-article-blogTree .tree').removeClass('fixed adFixed');
          }
      }
      else
      {
          $('.block-article-blogTree .tree').removeAttr('style');
      }
  });

  $('.blog-header .icon-search').click(function()
  {
      $(this).parent('form').submit();
  })
});
$('#foot').insertBefore('#footer');

$(document).ready(function(){
    if(typeof headerList != 'undefined') return ;
    headerList = true;
    $('#footer #footNav').append('<a class="privacy" href="/page/zentao-privacypolicy.html">隐私政策</a>');
    $('#footer #powerby').append('<a class="ipip" href="https://www.ipip.net/" target="_blank">本站IP数据由IPIP.NET提供</a>');
    $('#siteNav').append(`<a class="language" href="http://www.zentao.pm/" target="_blank"><i class="icon icon-globe"></i>English</a>`);
    $('.m-user-register .form-horizontal .agreement-form span').after(`<span>和《<a href="/page/zentao-privacypolicy.html" target="_blank">隐私政策</a>》</span>`);
});

if($('html').hasClass('m-index-index'))
{
    setTimeout(function(){$('#rightDocker').hide();}, 50);
    $(document).on('scroll', function()
    {
        var showTop = $(window).width() > 1440 ? 300 : 600;
        if($(window).scrollTop() > showTop)  $('#rightDocker').show();
        if($(window).scrollTop() < showTop)  $('#rightDocker').hide();
    })
}

$('.m-faq #top #toggleToc').text('隐藏目录').addClass('hide');
var isAdvanced = false;
$('.m-faq #top #toggleToc').on('click', function() {
   isAdvanced = !isAdvanced;
   if (isAdvanced) {
       $(this).text('显示目录').addClass('show').removeClass('hide');
   } else {
       $(this).text('隐藏目录').addClass('hide').removeClass('show');
   }
});

var windowScrollHeight = window.innerHeight;
var minScrollHeight = windowScrollHeight - $('#header').height() - $('#footer').height() - $('#foot:visible').height() - $('.salon-ad').height();
if($('.page-wrapper').height() < minScrollHeight) {
    $('.page-wrapper').css('minHeight', minScrollHeight)
}

if($('.salon-ad').is(':visible')) $('.article .catalog-wrap').css('top', $('#header:visible').height() + $('.article .search-wrap').height() + 60 + 32);
var $articleSubtitle = $('.article .content h2, .article .content h3, .article .content h4, .article h5, .article .content h6');

$(window).scroll(function(){
    // if($(window).scrollTop()>230){
    //     $(".m-faq #top #toggleToc").addClass('fixed');
    // }else{
    //     $(".m-faq #top #toggleToc").removeClass('fixed');
    // }
    
    if($('body > .popover > .contact-popover-content').length > 0) $('body > .popover > .contact-popover-content').parents('.popover').remove();
    
    $articleSubtitle.each(function(idx, item)
    {
        var currentID = $(item).attr('id');
        if($(item).offset().top - $(document).scrollTop() > 0 && $(item).offset().top - $(document).scrollTop() + $('.book-header')?.height()  < $('.salon-ad:visible')?.height() + $('#header:visible')?.height())
        {
            $(`.catalog-wrap a[href='#${currentID}']`).parent('li').addClass('active').siblings().removeClass('active');
        }
    });
});

$(document).on('click', '.catalog-wrap li a', function(e)
{
    e.preventDefault();
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    var selector  = $(e.target).attr('href');
    var scrollTop = $(selector).offset().top - $('#header:visible')?.height() - 20;
    if($('.salon-ad').is(':visible')) scrollTop = $(selector).offset().top - $('#header:visible')?.height() - 60 - 20;
    history.pushState('', '', location.pathname + selector);
    window.scrollTo({ top: scrollTop});
});

$('.m-faq table:last-child').before('<hr>');
// 首页点击空白处登录弹框隐藏
$(document).click(function(e) {
    if($(this).children('html').hasClass('m-user-login')) {
        return;
    } else {
        $('#loginModal').hide();
        if(window.qrCodeTimer) clearInterval(window.qrCodeTimer);
        $('#whitePaper').remove();
    }
})
$(document).on('click', '#loginModal, #privacyagreement, #agreement', function(e) {
    e.stopPropagation();
})
function showModalLogin(id, elem,  moreTop, moreLeft, showHeader, style, callback)
{
    var isVisible = document.getElementById(id) && document.getElementById(id).offsetParent;
    if(isVisible) return false;
    if(!style) {
        style = {}
    }

    var modalLoginOptions =
    {
        url     : "/user-loginmodal.html",
        name    : id,
        keyboard: false,
        backdrop: 'static',
        loaded  : function() {
            $('#' + id).addClass('modalLogin');
            if(showHeader == 0) $('#' + id + ' .close').hide();
            if($('html').hasClass('m-user-login')) $('#loginModal').css('height', $('.page-wrapper').height() + 100);
            callback && callback();
        },
        onHide: function(){
            if(window.smsTimer) clearInterval(window.smsTimer);
            if(window.qrCodeTimer) clearInterval(window.qrCodeTimer);
        }
    };
    var myModalTrigger = new $.zui.ModalTrigger(modalLoginOptions);
    myModalTrigger.show();
}

function getWebToken()
{
    const timestamp = Math.floor(Date.now() / 1000);
    const random = Math.random().toString(36).substr(2, 8);
    const userAgent = btoa(navigator.userAgent);
    return btoa(`${timestamp}:${random}:${userAgent}`);
}

$('.input-group-btn .btn').click(function()
{
    var value = $(this).parent().prev('input').val();
    if(value)
    {
        $('#searchForm').submit();
    }
});

$('.input-group #words').keypress(function(e) 
{
    if(e.keyCode === 13) 
    {
        var value = $(this).val();   
        if(value)
        {
            $('#searchForm').submit();
        }
        return false;
    }
});

$('.banner[data-form=83] p').append('<span>（报告将于2024年3月发布）</span>');

$('#rightDocker #globalCode').hover(function() {
    $('#rightDocker img[data-src]').each(function()
    {
        var $this = $(this);
        $this.attr('src', $this.data('src')).removeAttr('data-src');
    });
});

if($(window).width() < 768) {
    $('.popover-wrapper').unbind('hover');
    $('.popover-wrapper').off('click').click(function() {
        if($('.overlay').is(':visible')) 
        {
            $('#rightDocker .overlay').hide();
            $(this).find('.popover').removeClass('active');
        }
        else
        {
            $('#rightDocker .overlay').show();
            $(this).find('.popover').addClass('active');
        }
    });
    $('#rightDocker .overlay').on('click', function(e){e.stopPropagation(); $('.popover').removeClass('active'); $(this).hide();});
    $('#rightDocker .overlay').on('touchmove', function(e){e.stopPropagation(); $('.popover').removeClass('active'); $(this).hide();});
    $('.popover').click(function(e){e.stopPropagation();});
}

$('.dropdown-hover').on('mouseenter', '.white-paper', function(e) {
    e.stopPropagation();
});

$('#navbar a[href=""], .dropdown-second-menu > a').click(function(e) {e.preventDefault();});

if($('#navbar').data('type') == 'desktop_top')
{
    if($('#navbar .dropdown > a').find('.caret').length < 1) $('#navbar .dropdown > a').append(`<b class="caret" style="margin-left: 8px"></b>`);
}

if($('html').hasClass('m-article-workshop')) $('a[href="/services.html"]').parent().addClass('active');

function getZentaoChangeLog(type, version) {
    if($('.icon-spin').length) return;
    $('.change-log').after(`<i class="icon icon-spin icon-spinner-indicator"></i>`);
    var options = {
        name: 'logModal',
        title: $('#article h1').text(),
        width: '700px'
    };
    $.get(`/zentaoversion-get-${type}-${version}.html`, function(response) {
        options.custom = response.changelog.replace(/\n/g, '<br>');
        var logModalTrigger = new $.zui.ModalTrigger(options);
        logModalTrigger.show();
        $('.icon-spin').remove();
    });
}

function checkUaIsMobile() {
    return /(iPhone|iPad|iPod|iOS|Android|Linux armv8l|Linux armv7l|Linux aarch64)/i.test(
        navigator.userAgent
    );
}

$('.m-ask-index .col-md-10 .panel-wrapper').on('click', '.question-name a', function(e){history.pushState('', '', $(this).attr('href'))});

if($(window).width() > 1440) $('#globalCode .button-text').html('社群交流');
if($(window).width() < 1440) $('#globalCode .button-text').html('交流');

function debounce(fn, delay = 300) {
    let timer = null;

    return function() {
        if (timer) {clearTimeout(timer)}
        timer = setTimeout(() =>
        {
            fn.apply(this, arguments);
            timer = null;
        }, delay);
    }
}
setTimeout(function()
{
    $('.mini-btn').css('box-shadow', 'unset').css('-webkit-box-shadow', 'unset');
}, 1000);

setTimeout(function()
{
    if($('#div_company_mini').length && $('#div_company_mini')[0].style.display == 'none' && $('.mini-btn')[0].style.display == 'block') open_floatWindow();
}, 4000);

if(typeof(FingerprintJS) !== 'undefined')
{
    FingerprintJS.load()
    .then((fp) => {
        return fp.get();
    })
    .then((result) => {
        const visitorId = result.visitorId;
        let   location  = 'home';
        $('.contact-analysis').click(function()
        {
            if($(this).data('location')) location = $(this).data('location');
            const postData = {
              fingerprint: visitorId,
              triggerType: 'click',
              location: location,
              triggerTime: Math.round(new Date().getTime() / 1000)
            };
            $.post(createLink('contact', 'event'), postData);
        });
    });
}

$(document).ready(function()
{
    var targetPages = [
        '/solution-interactive-whiteboard.html',
        '/solution-thinmory.html',
        '/solution-rd-performance.html',
        '/solution-instant-messaging.html'
    ];
    
    var currentPath = window.location.pathname;
    
    var isTargetPage = targetPages.some(function(page)
    {
        return currentPath.endsWith(page);
    });
    
    if(isTargetPage)
    {
        function updateContactInfo()
        {
            $('#contactPopover').find('.sales-image-box img.sales-image').attr({
                'src': 'https://static.zentao.net/web/data/source/zentao/default/wide/contact-limu.png',
                'alt': '李木'
            });

            $('#contactPopover').find('.sales-introduction-image img.sales-qrcode').attr({
                'src': 'https://static.zentao.net/web/data/source/zentao/default/wide/contact-limu-qrcode.png',
                'alt': '李木'
            });

            $('#contactPopover').find('.sales-name').text('李木');
            
            $('#contactPopover').find('.sales-contact a').html(`<i class="icon icon-phone"></i>18562583552`)
            $('#contactPopover').find('.sales-contact>div').html(`<i class="icon icon-qq"></i>3985895121`)
        }
        
        updateContactInfo();
        
        var observer = new MutationObserver(function(mutations)
        {
            if($('#contactPopover').length)
            {
                updateContactInfo();
                observer.disconnect(); 
            }
        });
        
        observer.observe(document.body,
        {
            childList: true,
            subtree: true
        });
        
        setTimeout(function()
        {
            observer.disconnect();
        }, 10000);
    }
});


$(document).ready(function()
{ 
    const fileDownloadLink  = $.cookie('fileDownloadLink');
    const userControlLength = $('.siteNav .top-user-control').length;
    const isDownloadReferer = window.location.href == $.cookie('fileDownloadReferer');

    if(fileDownloadLink && isDownloadReferer && userControlLength > 0)
    {
        $.removeCookie('fileDownloadLink', { path: '/' });
        window.location.href = fileDownloadLink;
    }
});

$(document).ready(function()
{
    function detectNavVersion()
    {
        return $('#navbarWrapper').hasClass('navbarWrapperNew') ? 'nav-a' : 'nav-b';
    }

    $(document).on('click', 'a[href*="/demo.html"], a[href*="/downloads.html"]', function(e) {
        e.preventDefault();
        const href = $(this).attr('href');
        var objectType = href.includes('demo.html') ? 'demo' : 'download'
        var objectType = 'click-' + objectType + '-link';
        getUserFingerprint(objectType).then(result => {
            var data = {
                objectType: objectType,
                objectID: 0,
                content: '',
                fingerprint: result,
                location: 'nav',
                extra: detectNavVersion()
            }
            $.post(createLink('event', 'log'), data, function(response)
            {
                if(response.result == 'success')
                {
                    console.log('log success');
                    window.location.href = href;
                }
                else
                {
                    console.log('log fail');
                    window.location.href = href;
                }
            }, 'json');
        });
    });
});$(function(){
    $("#headNav a[href*='register']").remove();
    $("#headNav a[href*='login']").text('登录/注册');
    $('#headNav > .wrapper').append('<a class="language" href="http://www.zentao.pm/" target="_blank"><i class="icon icon-globe"></i>English</a>');
    $("#headNav a[href*='login']").click(function(elem)
    {
      if(window.qrCodeTimer) window.clearInterval(window.qrCodeTimer);
      const id = 'loginModal';
      showModalLogin(id, elem.target, 13, 0, 1);
      $('body').css('padding-right', 'unset');
      return false;
    });
  });
;
$(document).ready(function()
{
    $('a[data-download=1]').each(function()
    {   
        link = window.btoa(window.encodeURIComponent($(this).attr('href')));
        fileName = window.btoa(window.encodeURIComponent($(this).text()));
        $(this).attr('data-toggle', 'modal').attr('href', createLink('misc', 'download', 'link=' + link + '&fileName=' + fileName));
    }); 
})
;(function() {var _53code = document.createElement("script");_53code.src = "https://tb.53kf.com/code/code/ef35685c8390f5aa37b2ddce53eca3e09/1";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(_53code, s);})();;
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-17656773669');
;(function(w, d, t, u, o) {w[u] = w[u] || [], o.ts = (new Date).getTime();var n = d.createElement(t);n.src = "https://bat.bing.net/bat.js?ti=" + o.ti + ("uetq" != u ? "&q=" + u : ""),n.async = 1, n.onload = n.onreadystatechange = function() {var s = this.readyState;s && "loaded" !== s && "complete" !== s ||(o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad"),n.onload = n.onreadystatechange = null)};var i = d.getElementsByTagName(t)[0];i.parentNode.insertBefore(n, i);})(window, document, "script", "uetq", {ti: "97223475",enableAutoSpaTracking: true});;
function uet_report_conversion() {window.uetq = window.uetq || [];window.uetq.push('event', 'signup', {});}
function uet_report_conversion_submit() {window.uetq = window.uetq || [];window.uetq.push('event', 'submit_lead_form', {});}
;
function loadCartInfo(twinkle)
{
    var cartDialog = bootbox.dialog(
    {
        message: v.addToCartSuccess,
        buttons:
        {
            back:
            {
                label:     v.lang.continueShopping,
                className: 'btn-primary',
                callback:  function(){location.reload();}
            },
            cart:
            {
                label:     v.gotoCart,
                className: 'btn-primary',
                callback:  function(){location.href = createLink('cart', 'browse');}
            }
        }
    });
    cartDialog.on('hidden.zui.modal', function() {location.reload();})
}
;v.clickNavLogin = "\u70b9\u51fb\u5bfc\u822a\u767b\u5f55";;v.genFingerprintError = "\u751f\u6210\u6307\u7eb9\u4fe1\u606f\u51fa\u9519";;
async function getUserFingerprint()
{
    const agent  = typeof(FingerprintJS) !== 'undefined' ? await FingerprintJS.load() : '';
    const result = agent ? await agent.get() : '';
    return result ? result.visitorId : '';
}
$().ready(function()
{
    if(Number($.cookie('showTip')))
    {
        setTimeout(function()
        {
            if(!$('.download-modal').is(':visible')) 
            {
                $('#showGift').click();
                localStorage.removeItem('giftType');
                $.get('/user-showtip.html');
            }
        }, 50);
    }

    // set utm source.
    const urlParams = new URLSearchParams(window.location.search);

    // set rong pm source.
    const rongFromSource = urlParams.get('from');
    if(rongFromSource)
    {
        const rongPmFromArr = [
            'rrplnav',
            'rrpl',
            'boston-consulting-group-matrix',
            'appeals',
            '4ps',
            '3c-model',
            'PESTLE',
            'rrplOther',
            'column',
            'columnProducts',
            'columnProject',
            'columnTesting',
            'columnOps',
            'columnEffectiveness',
            'columnOther',
            'whitepaperDownload'
        ];
        const rongIndexFrom  = rongPmFromArr.indexOf(rongFromSource);
        if(rongIndexFrom !== -1) localStorage.setItem('utmSource', 'rongPm-' + rongFromSource);
    }

    // set google ads utm source.
    const utmSource = urlParams.get('utm_source');
    if(utmSource)
    {
        if(utmSource === 'google') localStorage.setItem('utmSource', utmSource);
    }


    getUserFingerprint().then(result => {
        // Record the user behavior.
        if($('.user-dropdown-menu').length > 0)
        {
            $.post(createLink('user', 'behavior'), {
                referrer: document.referrer,
                url: document.URL,
                title: document.title,
                timestamp: Date.parse(new Date()) / 1000,
                fingerprint: result
            });
        }
        else
        {
            var userBehaviorData = JSON.parse(localStorage.getItem('userBehavior'));
            if(!userBehaviorData){ userBehaviorData = []; }
            
            userBehaviorData.push({
                referrer: document.referrer,
                url: document.URL,
                title: document.title,
                timestamp: Date.parse(new Date()) / 1000,
                fingerprint: result
            })
            localStorage.setItem('userBehavior', JSON.stringify(userBehaviorData));
        }

        const utmSource = localStorage.getItem('utmSource') || '';
        if(utmSource)
        {
            $.post(createLink('ads', 'behavior'), {
                referrer: document.referrer,
                url: document.URL,
                title: document.title,
                timestamp: Date.parse(new Date()) / 1000,
                fingerprint: result,
                utmSource: utmSource
            });
        }

        // Record the time of mouse hover on the contact button.
        var mouseinTime, mouseoutTime;
        $('.popover-wrapper').hover(function() 
        {
            if($(this).find('.contact').length > 0)
            {
                mouseinTime = new Date().getTime();
            }
            $(this).find('.popover').addClass('active')
        }, 
        function() 
        {
            if($(this).find('.contact').length > 0)
            {
                mouseoutTime = new Date().getTime();
                if(mouseoutTime - mouseinTime > 3000)
                {
                    const postData = {
                        fingerprint: result,
                        triggerType: 'hover',
                        location   : 'rightDocker',
                        triggerTime: Math.round(mouseoutTime / 1000),
                        duration   : Math.round((mouseoutTime - mouseinTime) / 1000)
                    };
                    $.post(createLink('contact', 'event'), postData);
                }
            }
            $(this).find('.popover').removeClass('active')
        });

        // Record user behavior when clicking login button.
        if($(window).width() > 1240)
        {
            $(".siteNav .btn-login").off('click').click(function(elem)
            {
                $.cookie('extAutoDownloadID', 0);
                if(window.qrCodeTimer) window.clearInterval(window.qrCodeTimer);
                const id = 'loginModal';
                showModalLogin(id, elem.target, 13, 0, 1);
                $('body').css('padding-right', 'unset');
                var userBehaviorData = JSON.parse(localStorage.getItem('userBehavior'));
                if(!userBehaviorData) {userBehaviorData = []; }
                userBehaviorData.push({
                    referrer: document.referrer,
                    url: '/user-login.html',
                    title: v.clickNavLogin,
                    timestamp: Date.parse(new Date()) / 1000,
                    fingerprint: result
                });
                localStorage.setItem('userBehavior', JSON.stringify(userBehaviorData));
                return false;
            });

            $('.top-user-control').click(function(){location.href = $(this).attr('href');});
        }
    });
});

$('.cover-image').each(function(idx, item)
{
    const imgSrc = $(item).data('image');
    $(item).parent().css({'background-image': `url(${imgSrc})`});
})
if($(window).width() < 768)
{
    $('.navbar-toggle').off('click').click(function(e)
    {
        e.preventDefault();
        $('.navbar-collapse, .parent-category').toggle();
    });
}

setTimeout(function()
{
    $('.dropdown-hover').css('pointer-events', 'unset');
}, 1500);

var hoverTimer = 0, outTimer = 0;
$('.navbar-nav .dropdown-hover').off('mouseenter').on('mouseenter', function()
{
    clearTimeout(outTimer);
    var dropdownMenu = $(this).find('.dropdown-menu');
    hoverTimer = setTimeout(function()
    {
        $('.dropdown-menu').hide();
        dropdownMenu.css('display', 'flex');
        $('.navbar-nav li a .icon').removeClass('active');
        dropdownMenu.siblings('a').find('.icon').addClass('active');
    }, 400);
});
$('.navbar-nav .dropdown-hover').off('mouseleave').on('mouseleave', function()
{
    clearTimeout(hoverTimer);
    var menu = $(this).find('.dropdown-menu');
    outTimer = setTimeout(function()
    {
        menu.hide();
        menu.siblings('a').find('.icon').removeClass('active');
    }, 400);
});

$('.navbar').off('mouseleave').on('mouseleave', function()
{
    setTimeout(function(){$('.navbar-nav .dropdown-menu').hide();}, 400);
});

$('.nav li.dropdown-hover').unbind('mouseover');

if($(window).width() < 768)
{
    $('.navbar').unbind('mouseleave');
    $('.nav li.dropdown-hover').unbind('mouseenter').unbind('mouseleave').unbind('mouseover').unbind('mouseout');
    $('.dropdown-hover .first-nav-name').off('click').click(function(e)
    {
           e.preventDefault();
           e.stopPropagation();
           $(this).parent('li').toggleClass('open').siblings().removeClass('open');
    });
    $('.dropdown-third-menu a').click(function(e)
    {
        e.stopPropagation();
    });
    $('.close-nav-wrapper img').click(function(){$('.navbar-toggle').trigger('click');});
}

$('.global-search').click(function()
{
    $(this).siblings('form').addClass('active').find('input').focus();
});
$('#searchbar .icon-close').click(function()
{
    $(this).parents('form').removeClass('active').find('input').val('');
})
