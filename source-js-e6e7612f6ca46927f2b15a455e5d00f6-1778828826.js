/* Js for https://www.zentao.net/book/zentaopms/617.html, Version=1778828826 */
 ;if(typeof(v) != "object") v = {};v.theme = {"template":"default","theme":"wide","device":"desktop"};;v.lang = {"confirmDelete":"\u60a8\u786e\u5b9a\u8981\u6267\u884c\u5220\u9664\u64cd\u4f5c\u5417\uff1f","deleteing":"\u5904\u7406\u4e2d","doing":"\u5904\u7406\u4e2d","loading":"\u52a0\u8f7d\u4e2d","updating":"\u66f4\u65b0\u4e2d...","timeout":"\u7f51\u7edc\u8d85\u65f6,\u8bf7\u91cd\u8bd5","errorThrown":"\u6267\u884c\u51fa\u9519\uff1a","continueShopping":"\u7ee7\u7eed\u8d2d\u7269","required":"\u5fc5\u586b","back":"\u8fd4\u56de","continue":"\u7ee7\u7eed","bindWechatTip":"\u53d1\u5e16\u529f\u80fd\u8bbe\u7f6e\u4e86\u7ed1\u5b9a\u5fae\u4fe1\u7684\u9650\u5236\uff0c\u8bf7\u5148\u7ed1\u5b9a\u5fae\u4fe1\u4f1a\u5458\u3002","importTip":"\u53ea\u5bfc\u5165\u4e3b\u9898\u7684\u98ce\u683c\u548c\u6837\u5f0f","fullImportTip":"\u5c06\u4f1a\u5bfc\u5165\u6d4b\u8bd5\u6570\u636e\u4ee5\u53ca\u66ff\u6362\u7ad9\u70b9\u6587\u7ae0\u3001\u4ea7\u54c1\u7b49\u6570\u636e"};; 
$(document).ready(function()
{
    $(".chosen").chosen({no_results_text: '没有匹配的选项', placeholder_text:' ', disable_search_threshold: 10, width: '100%', search_contains: true});
    $('select.chosen-icons').chosenIcons({lang: 'zh-cn'});
});
;v.copySuccess = "\u590d\u5236\u6210\u529f";;v.objectType = "book";;v.objectID = 617;;v.scheme = "https";;v.httpHost = "www.zentao.net";;v.bookReleases = [{"22":"ASPICE\u7248 1.x"},{"26":"IPD\u7248 5.x","21":"IPD\u7248 4.x","17":"IPD\u7248 3.x","9":"IPD\u7248 2.x","8":"IPD\u7248 1.x"},{"25":"\u65d7\u8230\u7248 8.x","20":"\u65d7\u8230\u7248 7.x","16":"\u65d7\u8230\u7248 6.x","7":"\u65d7\u8230\u7248 5.x","6":"\u65d7\u8230\u7248 4.x"},{"24":"\u4f01\u4e1a\u7248 13.x","19":"\u4f01\u4e1a\u7248 12.x","15":"\u4f01\u4e1a\u7248 11.x","5":"\u4f01\u4e1a\u7248 10.x","4":"\u4f01\u4e1a\u7248 8.x"},{"23":"\u5f00\u6e90\u7248 22.x","18":"\u5f00\u6e90\u7248 21.7.x","14":"\u5f00\u6e90\u7248 21.x","3":"\u5f00\u6e90\u7248 20.x","2":"\u5f00\u6e90\u7248 18.x","1":"\u5f00\u6e90\u7248 12.x"}];;v.fullScreen = false;;v.theme = false;;v.copyLink = "\/book\/zentaopms\/617.html?releaseID=26";;v.bookRootPath = "\/book\/zentaopms.html";;v.jumpReleaseTitle = "\u5f53\u524d\u6587\u7ae0\u5728\u6240\u9009\u7248\u672c\u4e2d\u4e0d\u5b58\u5728";;v.jumpReleaseTip = "\u60a8\u5207\u6362\u7684\u7248\u672c\u4e2d\u4e0d\u5305\u542b\u5f53\u524d\u6587\u7ae0\uff0c\u662f\u5426\u8df3\u8f6c\u5230\u6240\u9009\u7248\u672c\u624b\u518c\uff1f";;
$(function()
{
    var videoContainer = "<video id=\"VIDEO_ID\" class=\"video-js vjs-default-skin vjs-big-play-centered\" controls preload=\"auto\" loop=\"loop\" data-setup='{\"autoplay\": VIDEO_AUTOSTART, \"width\": VIDEO_WIDTH, \"height\": VIDEO_HEIGHT, \"controlBar\": {\"fullscreenToggle\": VIDEO_FULLSCREEN}}'><source src=\"VIDEO_SRC\" type=\"video\/VIDEO_TYPE\" \/> <\/video>";
    $('embed').each(function(index)
    {
        if($(this).hasClass('videojs')) 
        {
            var $embed      = $(this),
                src         = $embed.attr('src'),
                w           = $embed.width(),
                h           = $embed.height(),
                type        = src.match(/t=\w+/g),
                autostart   = $embed.attr('autostart'),
                fullscreen  = $embed.attr('allowfullscreen'),
                containerID = 'video_' + index;

            $container = videoContainer.replace(/VIDEO_SRC/g, src);
            $container = $container.replace(/VIDEO_WIDTH/, w);
            $container = $container.replace(/VIDEO_HEIGHT/, h);
            $container = $container.replace(/VIDEO_ID/, containerID);
            $container = $container.replace(/VIDEO_AUTOSTART/, autostart);
            $container = $container.replace(/VIDEO_FULLSCREEN/, fullscreen);
            $container = $container.replace(/VIDEO_TYPE/, type[0].replace('t=', ''));
            $(this).replaceWith($container);
        }
    })
});
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
    $('.dropdown').find('[href="/book/zentaopms/38.html"]').parents('li.dropdown').addClass('active').siblings('li').removeClass('active');

    $('.nav-system-book').addClass('active');
    $('#navbar li.active').parents('li').addClass('active');
    $('#article' + v.objectID).addClass('active');
    $('#article' + v.objectID).parents('dd').each(function()
    {
        $(this).attr('class', $(this).attr('class').replace('closed', 'opened'));
        $(this).addClass('active');
    })
    if(v.fullScreen)
    {
        $('html, body').css('height', '100%');

        var hash = window.location.hash;
        if(hash.indexOf('#article') === 0)
        {
            var $selected = $(hash);
            if($selected.length) $selected[0].scrollIntoView();
        }

        $('.article').each(function()
        {
            var $article = $(this);
            var $a = $article.children('a');
            if($a.length) $a.attr('href', $a.attr('href') + '#' + $article.attr('id'));
        });
    }

    $('dl dl').each(function()
    {
        $(this).attr('data-height', $(this).children('dd').length * 32);
    });

    function debounce(fn, delay = 100)
    {
        let timer = null;

        return function()
        {
            if (timer) {clearTimeout(timer)}
            timer = setTimeout(() =>
            {
                fn.apply(this, arguments);
                timer = null;
            }, delay);
        }
    }

    $('dd span').off('click').click(debounce(function()
    {
        var $this = $(this);
        if($this.parent().hasClass('opened'))
        {
            $this.parent().addClass('closed').removeClass('opened');
            var openedCount = $this.siblings('dl').find('dd.opened dd').length;
            $this.parent().find('dd').addClass('closed').removeClass('opened');
            $this.parent().find('dl').css('height', 0);
            $this.siblings('dl').css('height', 0);
            $this.parents('dl').each(function()
            {
                var thisHeight = Number($(this).height());
                if($(this).attr('style')) $(this).css('height', thisHeight - $this.siblings('dl').children('dd').length * 32 - openedCount * 32);
            })
        }
        else
        {
            $this.parent().addClass('opened').removeClass('closed');
            var dlHeight = $this.siblings('dl').attr('data-height');
            $this.siblings('dl').css('height', dlHeight);
            $this.parents('dl').each(function()
            {
                var thisHeight = Number($(this).height());
                if($(this).attr('style')) $(this).css('height', thisHeight + $this.siblings('dl').children('dd').length * 32);
            })
        }
    }));

    $('dd a').off('click').click(function()
    {
        if($('.article.book-content').length !== 0)
        {
            getContent(this);
            return false;
        }
    });

    $('body').on("click",".icon-next a, .icon-previous a, .previous a, .next a",function()
    {
        if($('.article.book-content').length !== 0)
        {
            getContent(this);
            return false;
        }
    });

    $('body').on("blur",'.popover input',function()
    {
        $('[data-toggle="popover"]').popover('hide');
        return false;
    });

    $(window).on('popstate', function(event)
    {
        // if(event.target.document.URL) location.href = event.target.document.URL;
    });

    function getContent(obj)
    {
        if($(obj).parent().attr('class').indexOf('disabled') != '-1') return false;
        var url = $(obj).attr('href');
        var title = $(obj).text();
        if($('.article.book-content').length !== 0)
        {
            $('.col-md-9').load(url + ' .col-md-9 > div', function(response)
            {
                if($(response).find('.col-md-9').length === 0)
                {
                    $('.col-md-9').html("<div class='article book-content'>" + $(response).find('.modal-dialog').html() + "</div>")
                }
                $('.breadcrumb').html($(response).find('.breadcrumb').html());
                init();

                if($('#commentBox').length)
                {
                    var objectID = $('#id').val();
                    $('#commentBox').load(createLink('message', 'comment', "objectType=book&objectID=" + objectID));
                }

                if($(response).find('.parent-category').length > 0)
                {
                    $('.parent-category').html($(response).find('.parent-category').html());
                }
                if($(window).width() < 768)
                {
                    $('.col-md-3, .col-md-3 .panel').removeClass('active');
                    $('.chapter').removeClass('opened').addClass('closed');
                    $('.catalogue.article.active').parents('.chapter').removeClass('closed').addClass('opened');
                }

                history.pushState('', 'book', url);

                document.title = title;
            });

            if($('.filter-wrapper-version').length > 0)
            {
                $('.filter-wrapper-version').load(url + ' .filter-wrapper-version .dropdown');
            }

            if($('.filter-wrapper-nav').length > 0)
            {
                $('.filter-wrapper-nav').load(url + ' .filter-wrapper-nav .dropdown', function()
                {
                    $('.nav-content').on('click', 'a', function(e)
                    {
                        e.preventDefault();
                        var $targetLi = $(e.target).closest('li');
                        $('.nav-content li').removeClass('active');
                        location.href = this.hash;
                        $('.filter-wrapper-nav .dropdown').removeClass('open');
                        $targetLi.addClass('active');
                    });
                });
            }
        }
        else
        {
            $.get(url, function(data)
            {
                $('.fullScreen-content').html($(data).find('.fullScreen-content').html());
                $('.fullScreen-nav').html($(data).find('.fullScreen-nav').html());
                init();
            })
        }
    }

    function init()
    {
        window.scrollTo({top: 0});
        var objectID = $('#id').val();
        $('.article').removeClass('active');
        $('#article' + objectID).addClass('active');
        if($(".books dd.article.active > a").attr('href'))
        {
            if($(".qrcode-mobile").length)
            {
                articleID = $(".books dd.article.active").attr('id').substr('7');
                if($(".qrcode-mobile").attr('data-src'))
                {
                    length = $(".qrcode-mobile").attr('data-src').indexOf('qrcode');
                    $(".qrcode-mobile").attr('data-src', createLink('misc', 'qrcode', 'articleID=' + articleID));
                }
                else
                {
                    length = $(".qrcode-mobile").attr('src').indexOf('qrcode');
                    $(".qrcode-mobile").attr('src', createLink('misc', 'qrcode', 'articleID=' + articleID));
                }
            }
        }

        $('[data-toggle="popover"]').popover(
        {
            content : v.scheme + "://" + v.httpHost + $('.copyLink').text(),
            template : '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><input class="form-control" type="text" value=' + v.scheme + "://" + v.httpHost + $('.copyLink').text() + '></div></div>',
            trigger : 'click',
        });

        if($(window).width() < 768)
        {
            var placement = 'right';
            if($('html').hasClass('m-book-search')) placement = 'left';
            $('[data-toggle="popover"]').tooltip({placement : placement, title : v.copySuccess, trigger : 'manual'});
        }
        else
        {
            $('[data-toggle="popover"]').tooltip({placement : 'right', title : v.copySuccess, trigger : 'manual'});
        }
        if(typeof(Fancybox) == 'function') fancyImage();
    }

    function fancyImage() {
        $('.article-content img').each(function()
        {
            const _this = $(this);
            if(!_this.parent().hasClass('box-group')) _this.wrap(`<a class="box-group" data-fancybox rel="group" href=${_this.attr('src')}></a>`);
        });

        Fancybox.bind("[data-fancybox]", {
            groupAll : true,
            modal: true
        });
    }

    $(window).keydown(function(e)
    {
        if(!document.getElementsByClassName('fancybox__container').length) {
            if(!$('#commentBox #content').val() && !$('#replyForm').is(':visible'))
            {
                if(e.keyCode == 37) getContent($('.previous a'));
                if(e.keyCode == 39) getContent($('.next a'));
            }
        }
    });

    if(!$('html').hasClass('m-book-browse'))
    {
        init();
    }
    else
    {
        $('.catalogue').removeClass('closed').addClass('opened');
        $(window).scroll(function ()
        {
            $('.dropdown').removeClass('open');
        });
    }

    $('.parent-category').off('click').click(function()
    {
        $('.col-md-3, .col-md-3 .panel').toggleClass('active');
    });
    $('.col-md-3 .category-overlay, .mobile-category-title .icon-close').click(function()
    {
        $('.col-md-3 .panel').removeClass('active');
        setTimeout(function(){$('.col-md-3').removeClass('active')}, 400);
    });

    $(document).on('keydown', '#bookSearch', function(e)
    {
        if(e.keyCode === 13)
        {
            e.preventDefault();
            bookSearch(e.target.value);
        }
    });

    $(document).on('click', '.header-wrapper .icon-search', function()
    {
        bookSearch($(this).siblings('input').val());
    });

    function bookSearch(value)
    {
        let params = '';
        let searchLink = '';
        if(v.fullScreen) searchLink = `/book-search-${value}-1-${v.fullScreen}-${v.theme}.html`;
        if(!v.fullScreen) searchLink = `/book-search-${value}.html`;

        if(value && v.fullScreen === 'zentao') location.href = searchLink;
        if(value && v.fullScreen !== 'zentao') window.open(searchLink, 'bookSearch');
        if(!value && location.href.includes('book-search')) {location.href = $($('.books a')[0]).attr('href');}
    }

    $('.nav-content').on('click', 'a', function(e) {
        e.preventDefault();
        var $targetLi = $(e.target).closest('li');
        $('.nav-content li').removeClass('active');
        location.href = this.hash;
        $('.filter-wrapper-nav .dropdown').removeClass('open');
        $targetLi.addClass('active');
    });

    window.addEventListener('hashchange', function() {
        window.scrollTo(window.scrollX, window.scrollY - 160);
    });
});
$(document).ready(function()
{
    if(v.status == 'draft') $('.url-copy').attr('data-clipboard-text', location.href);
    var clipboard = new ClipboardJS('.url-copy');
    clipboard.on('success', function(e) {
        $(e.trigger).tooltip('show');
        setTimeout(function(){$(e.trigger).tooltip('hide');}, 2000);
        $(e.trigger).popover('hide');
    });
    if($('.fullScreen-nav .nav-content').height() < $(window).height())
    {
        $('.fullScreen-nav .nav-content').css('padding-top', '0px');
    }

    $('.fullScreen-nav .nav-content a').click(function()
    {
        $('.fullScreen-nav .nav-content a').removeClass('active');
        $(this).addClass('active');
    });

    $('body').tooltip(
    {
         html: true,
         selector: "[data-toggle=tooltip]",
         container: "body"
    });

    $('.fullScreen-content').on("scroll", function()
    {
        var count = $(".fullScreen-nav li").length;
        if(!count) return false;
        for(var i=0;i<count;i++)
        {
            if($('#' + i).offset().top <= '80')
            {
                $('.fullScreen-nav .nav-content a').removeClass('active');
                $(".fullScreen-nav .nav-content a[href='#" + i + "']").addClass('active');
            }
        }
    });
    /* Scroll function. */
    function yrScroll()
    {
         var listTitleHeight = $(".book-catalog .panel-heading").height();

         var catalogWidth  = $('.book-catalog').width();
         var catalogHeight = $(window).height() - 10;
         $(".book-catalog").css({'max-height': catalogHeight, 'overflow-y': 'auto', 'overflow-x': 'hidden'});

         if($('.books .active').length)
         {
             var listScrollTop =  $(".books .active").position().top;
             var listMoveSize = listScrollTop > ( $(".bookScrollListsBox").height() - listTitleHeight ) / 2 ? listScrollTop : 0;
             var scrollMoveSize = listMoveSize / $(".books").height();
             $(".bookScrollListsBox").scrollTop
             (
                 $(".bookScrollListsBox .books").height() * scrollMoveSize -($(".bookScrollListsBox").height() / 2 - $(".bookScrollListsBox .panel-heading").height() - 47)
             );
         }


         /* Bind scroll event */
         $(document).on("scroll", function ()
         {
              if( $("#book").offset()) var headerHeight = $("#book").offset().top;
              if( $('.col-md-9').offset()) { var footerHeight = $('.col-md-9').offset().top + $('.col-md-9').height() - $(window).height();}

              $(".page-wrapper").css({"min-height":$(".book-catalog").height()})
              if($(document).scrollTop() > headerHeight )
              {
                   $('.book-catalog').css({'position': 'fixed', 'top':'0', 'width': catalogWidth});

                   if($(document).scrollTop() > footerHeight)
                   {
                       catalogHeight2 = $(window).height() - $('.blocks.all-bottom').outerHeight() - $('#footer').outerHeight() - 60;
                       $('.book-catalog').css({'max-height': catalogHeight2, 'overflow-y': 'auto', 'overflow-x': 'hidden'});
                   }
                   else
                   {
                       $('.book-catalog').css({'max-height': catalogHeight, 'overflow-y': 'auto', 'overflow-x': 'hidden'});
                   }
              }
              else if( $(document).scrollTop() < headerHeight )
              {
                   $('.book-catalog').css({'position': 'relative' });
              }
         });
    };
    //yrScroll();

    $('.previous > a, .next > a').css('max-width', (($('.pager').width() - $('.pager > .back > a').width()) * 0.45));

    if($('.previous > a > span').width() > $('.previous > a').width())
    {
        previousSpanWidth = $('.previous > a').width() - $('.previous .icon-arrow-left').width() - 5;
        $('.previous > a > span').css('width', previousSpanWidth);
    }

    if($('.next > a > span').width() > $('.next > a').width())
    {
        nextSpanWidth = $('.next > a').width() - $('.next .icon-arrow-right').width() - 5;
        $('.next > a > span').css('width', nextSpanWidth);
    }
});

(function($, document, Math) {
    'use strict';

    var NAME     = 'zui.droppable',
        DEFAULTS = {
        // container: '',
        // selector: '',
        // handle: '',
        // flex: false,
        // nested: false,
        target: '.droppable-target',
        deviation: 5,
        sensorOffsetX: 0,
        sensorOffsetY: 0,
        dropToClass: 'drop-to',
         // mouseButton: -1 // 0, 1, 2, -1, all, left,  right, middle
    };
    var idIncrementer = 0;

    var Droppable = function(element, options) {
        var that     = this;
        that.id      = idIncrementer++;
        that.$       = $(element);
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.init();
    };

    Droppable.DEFAULTS = DEFAULTS;
    Droppable.NAME     = NAME;

    Droppable.prototype.trigger = function(name, params) {
        return $.zui.callEvent(this.options[name], params, this);
    };

    Droppable.prototype.init = function() {
        var that           = this,
            $root          = that.$,
            setting        = that.options,
            deviation      = setting.deviation,
            eventSuffix    = '.' + NAME + '.' + that.id,
            mouseDownEvent = 'mousedown' + eventSuffix,
            mouseUpEvent   = 'mouseup' + eventSuffix,
            mouseMoveEvent = 'mousemove' + eventSuffix,
            selector       = setting.selector,
            handle         = setting.handle,
            flex           = setting.flex,
            container      = setting.container,
            canMoveHere    = setting.canMoveHere,
            dropToClass    = setting.dropToClass,
            $ele           = $root,
            isMouseDown    = false,
            $container     = container ? $(setting.container).first() : (selector ? $root : $('body')),
            $targets,
            $target,
            $shadow,
            isIn,
            isSelf,
            oldCssPosition,
            startOffset,
            startMouseOffset,
            containerOffset,
            clickOffset,
            mouseOffset,
            lastMouseOffset,
            mouseDownBackEventCall;

        var mouseMove = function(event) {
            if(!isMouseDown) return;

            mouseOffset = {left: event.pageX, top: event.pageY};

            // ignore small move
            if(Math.abs(mouseOffset.left - startMouseOffset.left) < deviation && Math.abs(mouseOffset.top - startMouseOffset.top) < deviation) return;

            if($shadow === null) // create shadow
            {
                var cssPosition = $container.css('position');
                if(cssPosition != 'absolute' && cssPosition != 'relative' && cssPosition != 'fixed') {
                    oldCssPosition = cssPosition;
                    $container.css('position', 'relative');
                }

                $shadow = $ele.clone().removeClass('drag-from').addClass('drag-shadow').css({
                    position:   'absolute',
                    width:      $ele.outerWidth(),
                    transition: 'none'
                }).appendTo($container);
                $ele.addClass('dragging');

                that.trigger('start', {
                    event:   event,
                    element: $ele,
                    shadowElement: $shadow,
                    targets: $targets
                });
            }

            var offset = {
                left: mouseOffset.left - clickOffset.left,
                top:  mouseOffset.top - clickOffset.top
            };
            var position = {
                left: offset.left - containerOffset.left,
                top:  offset.top - containerOffset.top
            };
            $shadow.css(position);
            $.extend(lastMouseOffset, mouseOffset);

            var isNew = false;
                isIn = false;

            if(!flex) {
                $targets.removeClass(dropToClass);
            }

            var $newTarget = null;
            $targets.each(function() {
                var t    = $(this),
                    tPos = t.offset(),
                    tW   = t.outerWidth(),
                    tH   = t.outerHeight(),
                    tX   = tPos.left + setting.sensorOffsetX,
                    tY   = tPos.top + setting.sensorOffsetY;

                if(mouseOffset.left > tX && mouseOffset.top > tY && mouseOffset.left < (tX + tW) && mouseOffset.top < (tY + tH)) {
                    if($newTarget) $newTarget.removeClass(dropToClass);
                    $newTarget = t;
                    if(!setting.nested) return false;
                }
            });

            if($newTarget) {
                isIn = true;
                var id = $newTarget.data('id');
                if($ele.data('id') != id) isSelf = false;
                if($target === null || ($target.data('id') !== id && (!isSelf))) isNew = true;
                $target = $newTarget;
                if(flex) {
                    $targets.removeClass(dropToClass);
                }
                $target.addClass(dropToClass);
            }


            if(!flex) {
                $ele.toggleClass('drop-in', isIn);
                $shadow.toggleClass('drop-in', isIn);
            } else if($target !== null && $target.length) {
                isIn = true;
            }

            if(!canMoveHere || canMoveHere($ele, $target) !== false) {
                that.trigger('drag', {
                    event: event,
                    isIn: isIn,
                    target: $target,
                    element: $ele,
                    isNew: isNew,
                    selfTarget: isSelf,
                    clickOffset: clickOffset,
                    offset: offset,
                    position: {
                        left: offset.left - containerOffset.left,
                        top: offset.top - containerOffset.top
                    },
                    mouseOffset: mouseOffset
                });
            }

            event.preventDefault();
        };

        var mouseUp = function(event) {
            $(document).off(eventSuffix);
            clearTimeout(mouseDownBackEventCall);
            if(!isMouseDown) return;

            isMouseDown = false;

            if(oldCssPosition) {
                $container.css('position', oldCssPosition);
            }

            if($shadow === null) {
                $ele.removeClass('drag-from');
                that.trigger('always', {
                    event: event,
                    cancel: true
                });
                return;
            }

            if(!isIn) $target = null;
            var isSure = true;
            mouseOffset = event ? {
                left: event.pageX,
                top: event.pageY
            } : lastMouseOffset;
            var offset = {
                left: mouseOffset.left - clickOffset.left,
                top: mouseOffset.top - clickOffset.top
            };
            var moveOffset = {
                left: mouseOffset.left - lastMouseOffset.left,
                top: mouseOffset.top - lastMouseOffset.top
            };
            lastMouseOffset.left = mouseOffset.left;
            lastMouseOffset.top = mouseOffset.top;
            var eventOptions = {
                event: event,
                isIn: isIn,
                target: $target,
                element: $ele,
                isNew: (!isSelf) && $target !== null,
                selfTarget: isSelf,
                offset: offset,
                mouseOffset: mouseOffset,
                position: {
                    left: offset.left - containerOffset.left,
                    top: offset.top - containerOffset.top
                },
                lastMouseOffset: lastMouseOffset,
                moveOffset: moveOffset
            };

            isSure = that.trigger('beforeDrop', eventOptions);

            if(isSure && isIn) {
                that.trigger('drop', eventOptions);
            }

            $targets.removeClass(dropToClass);
            $ele.removeClass('dragging').removeClass('drag-from');
            $shadow.remove();
            $shadow = null;

            that.trigger('finish', eventOptions);
            that.trigger('always', eventOptions);

            if(event) event.preventDefault();
        };

        var mouseDown = function(event) {
            var mouseButton = $.zui.getMouseButtonCode(setting.mouseButton);
            if(mouseButton > -1 && event.button !== mouseButton) {
                return;
            }

            var $mouseDownEle = $(this);
            if(selector) {
                $ele = handle ? $mouseDownEle.closest(selector) : $mouseDownEle;
            }

            if($ele.hasClass('drag-shadow')) {
                return;
            }

            if(setting['before']) {
                if(setting['before']({
                    event: event,
                    element: $ele
                }) === false) return;
            }

            isMouseDown = true;
            $targets         = typeof setting.target === 'function' ? setting.target($ele, $root) : $container.find(setting.target),
            $target          = null,
            $shadow          = null,
            isIn             = false,
            isSelf           = true,
            oldCssPosition   = null,
            startOffset      = $ele.offset(),
            containerOffset  = $container.offset();
            containerOffset.top = containerOffset.top - $container.scrollTop();
            containerOffset.left = containerOffset.left - $container.scrollLeft();
            startMouseOffset = {left: event.pageX, top: event.pageY};
            lastMouseOffset  = $.extend({}, startMouseOffset);
            clickOffset      = {
                left: startMouseOffset.left - startOffset.left,
                top: startMouseOffset.top - startOffset.top
            };

            $ele.addClass('drag-from');
            $(document).on(mouseMoveEvent, mouseMove).on(mouseUpEvent, mouseUp);
            mouseDownBackEventCall = setTimeout(function() {
                $(document).on(mouseDownEvent, mouseUp);
            }, 10);
            event.preventDefault();
            if(setting.stopPropagation) {
                event.stopPropagation();
            }
        };

        if(handle) {
            $root.on(mouseDownEvent, handle, mouseDown);
        } else if(selector) {
            $root.on(mouseDownEvent, selector, mouseDown);
        } else {
            $root.on(mouseDownEvent, mouseDown);
        }
    };

    Droppable.prototype.destroy = function() {
        var eventSuffix = '.' + NAME + '.' + this.id;
        this.$.off(eventSuffix);
        $(document).off(eventSuffix);
        this.$.data(NAME, null);
    };

    Droppable.prototype.reset = function() {
        this.destroy();
        this.init();
    };

    $.fn.droppable = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new Droppable(this, options)));

            if(typeof option == 'string') data[option]();
        });
    };

    $.fn.droppable.Constructor = Droppable;

}(jQuery, document, Math));

(function($, window, undefined) {
    'use strict';

    /* Check jquery */
    if(typeof($) === 'undefined') throw new Error('ZUI requires jQuery');

    /* ZUI shared object */
    if(!$.zui) $.zui = function(obj) {
        if($.isPlainObject(obj)) {
            $.extend($.zui, obj);
        }
    };

    var MOUSE_BUTTON_CODES = {
        all: -1,
        left: 0,
        middle: 1,
        right: 2
    };

    var lastUuidAmend = 0;
    $.zui({
        uuid: function(asNumber) {
            var uuidNumber = (Date.now() - 1580890015292) * 10e4 + Math.floor(Math.random() * 10e3) * 10 + (lastUuidAmend++) % 10;
            return asNumber ? uuidNumber : uuidNumber.toString(36);
        },

        callEvent: function(func, event, proxy) {
            if(typeof func === 'function') {
                if(proxy !== undefined) {
                    func = func.bind(proxy);
                }
                var result = func(event);
                if(event) event.result = result;
                return !(result !== undefined && (!result));
            }
            return 1;
        },

        strCode: function(str) {
            var code = 0;
            if (typeof str !== 'string') str = String(str);
            if(str && str.length) {
                for(var i = 0; i < str.length; ++i) {
                    code += (i + 1) * str.charCodeAt(i);
                }
            }
            return code;
        },

        getMouseButtonCode: function(mouseButton) {
            if(typeof mouseButton !== 'number') {
                mouseButton = MOUSE_BUTTON_CODES[mouseButton];
            }
            if(mouseButton === undefined || mouseButton === null) mouseButton = -1;
            return mouseButton;
        },

        /**
         * default language name
         * @type {string}
         */
        defaultLang: 'en',

        /**
         * Get client language name
         * @return {string}
         */
        clientLang: function() {
            var lang;
            var config = window.config;
            if(typeof(config) != 'undefined' && config.clientLang) {
                lang = config.clientLang;
            }
            if(!lang) {
                var hl = $('html').attr('lang');
                lang = hl ? hl : (navigator.userLanguage || navigator.userLanguage || $.zui.defaultLang);
            }
            return lang.replace('-', '_').toLowerCase();
        },

        /**
         * @type {object}
         * @example
         * {
         *      'zui.pager': {
         *          'zh-cn': {
         *              prev: '上一页',
         *          }
         *      }
         * }
         */
        langDataMap: {},

        /**
         * Add lang data for components
         * @param {string} [langName]
         * @param {string} [componentName]
         * @param {object} data
         * @example
         * // Add lang data to specify language and specify component
         * $.zui.addLangData('zh-cn', 'zui.pager', {
         *      prev: '上一页',
         *      next: '下一页',
         * });
         *
         * // Add lang data to specify language and multiple components
         * $.zui.addLangData('zh-cn', {
         *      'zui.pager': {
         *          prev: '上一页',
         *          next: '下一页',
         *      },
         *      'chosen': {
         *      }
         * });
         *
         * // Add lang data to multiple languages and multiple components
         * $.zui.addLangData({
         *      'zh-cn': {
         *          'zui.pager': {
         *              prev: '上一页',
         *              next: '下一页',
         *          },
         *          'chosen': {
         *          }
         *      },
         *      'zh-tw': {
         *          'zui.pager': {
         *              prev: '上一页',
         *              next: '下一页',
         *          }
         *      }
         * });
         */
        addLangData: function(langName, componentName, data) {
            var langData = {};
            if (data && componentName && langName) {
                langData[componentName] = {};
                langData[componentName][langName] = data;
            } else if (langName && componentName && !data) {
                data = componentName;
                $.each(data, function(comName) {
                    langData[comName] = {};
                    langData[comName][langName] = data[comName];
                });
            } else if (langName && !componentName && !data) {
                $.each(data, function(theLangName) {
                    var comsData = data[theLangName];
                    $.each(comsData, function(comName) {
                        if (!langData[comName]) {
                            langData[comName] = {};
                        }
                        langData[comName][theLangName] = comsData[comName];
                    });
                });
            }
            $.extend(true, $.zui.langDataMap, langData);
        },

        /**
         * Get lang data
         * @example
         * $.zui.getLangData('zui.pager');
         *
         * $.zui.getLangData('zui.pager', 'zh-cn');
         *
         * $.zui.getLangData('zui.pager', 'zh-cn', {
         *      prev: '上一页',
         *      next: '下一页',
         * });
         */
        getLangData: function(componentName, langName, initialData) {
            if (!arguments.length) {
                return $.extend({}, $.zui.langDataMap);
            }
            if (arguments.length === 1) {
                return $.extend({}, $.zui.langDataMap[componentName]);
            }
            if (arguments.length === 2) {
                var comData = $.zui.langDataMap[componentName];
                if (comData) {
                    return langName ? comData[langName] : comData;
                }
                return {};
            }
            if (arguments.length === 3) {
                langName = langName || $.zui.clientLang();
                var comData = $.zui.langDataMap[componentName];
                var langData = comData ? comData[langName] : {};
                return $.extend(true, {}, initialData[langName] || initialData.en || initialData.zh_cn, langData);
            }
            return null;
        },

        lang: function() {
            if (arguments.length && $.isPlainObject(arguments[arguments.length - 1])) {
                return $.zui.addLangData.apply(null, arguments);
            }
            return $.zui.getLangData.apply(null, arguments);
        },

        _scrollbarWidth: 0,
        checkBodyScrollbar: function() {
            if(document.body.clientWidth >= window.innerWidth) return 0;
            if(!$.zui._scrollbarWidth) {
                var scrollDiv = document.createElement('div');
                scrollDiv.className = 'scrollbar-measure';
                document.body.appendChild(scrollDiv);
                $.zui._scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return $.zui._scrollbarWidth;
        },
        fixBodyScrollbar: function() {
            if($.zui.checkBodyScrollbar()) {
                var $body = $('body');
                var bodyPad = parseInt(($body.css('padding-right') || 0), 10);
                if($.zui._scrollbarWidth) {
                    $body.css({paddingRight: bodyPad + $.zui._scrollbarWidth, overflowY: 'hidden'});
                }
                return true;
            }
        },
        resetBodyScrollbar: function() {
            $('body').css({paddingRight: '', overflowY: ''});
        },
    });

    $.fn.callEvent = function(name, event, model) {
        var $this = $(this);
        var dotIndex = name.indexOf('.zui.');
        var shortName = dotIndex < 0 ? name : name.substring(0, dotIndex);
        var e = $.Event(shortName, event);

        if((model === undefined) && dotIndex > 0) {
            model = $this.data(name.substring(dotIndex + 1));
        }

        if(model && model.options) {
            var func = model.options[shortName];
            if(typeof func === 'function') {
                e.result = $.zui.callEvent(func, e, model);
            }
        }
        $this.trigger(e);
        return e;
    };

    $.fn.callComEvent = function(component, eventName, params) {
        if (params !== undefined && !Array.isArray(params)) {
            params = [params];
        }
        var $this = this;
        var result;
        $this.trigger(eventName, params);

        var eventCallback = component.options[eventName];
        if (eventCallback) {
            result = eventCallback.apply(component, params);
        }
        return result;
    };
}(jQuery, window, undefined));



$(document).ready(function()
{
    /* Scroll function. */
    function yrScroll()
    {
        /* Bind scroll event */
        $(document).on("scroll", function ()
        {
            if( $("#book").offset()) var headerHeight = $("#book").offset().top;
            if( $('.col-md-9').offset()) { var footerHeight = $('.col-md-9').offset().top + $('.col-md-9').height() - $(window).height();}

            if($('.article-content .catalog-wrap').length)
            {
                if($(document).scrollTop() + $('.article-content .catalog-wrap').height() + 120 > $('.book-content footer').offset().top)
                {
                    $('.article-content .catalog-wrap').hide();
                }
                else
                {
                    $('.article-content .catalog-wrap').show();
                }
            }
        });
    };
    yrScroll();

    $('.return-back').click(function()
    {
        window.history.go(-1);
    });

    var currentPosition = $('.resize-bar').offset() && $('.resize-bar').offset().left;

    $('.filter-wrapper').off('click').on('click', '.btn', function(e)
    {
        e.stopPropagation();
        $(this).parent('.dropdown').toggleClass('open');
    });
    $('.filter-wrapper').click(function(e){e.stopPropagation();});
    $(document).on('click', function(){$('.filter-wrapper').removeClass('open');});

    $('.filter-wrapper').on('click', '.release-link', function(e)
    {
        e.preventDefault();
        var releaseID = $(this).data('release-id');
        if(!$(this).data('canswitch'))
        {
            bootbox.confirm({
                title: v.jumpReleaseTitle,
                message: v.jumpReleaseTip,
                callback: function(result)
                {
                    if(result)
                    {
                        saveReleaseID(releaseID);
                        location.href = v.bookRootPath
                    }
                }
            })
        }
        else
        {
            saveReleaseID(releaseID);
            location.href = $(this).attr('href');
        }
    });

    $('.col-md-9').on('click', '.article-link', function(){saveReleaseID($(this).data('release-id'));});

    function saveReleaseID(releaseID)
    {
        if(releaseID > 0) $.cookie('bookReleaseID', releaseID);
    }

    $('.col-md-9').append($('#footer'));

    $('.col-md-9').on('click', '.catalog-wrap a', function(e)
    {
        e.preventDefault();
        var selector = $(this).attr('href');
        var bookHeaderHeight = 65;
        if($('.salon-ad').is(':visible')) bookHeaderHeight = 125;
        setTimeout(function()
        {
            window.scrollTo({
                top: $(selector).offset().top - bookHeaderHeight - 12,
                behavior: 'smooth'
            })
        }, 0);
    });
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
                'src': 'https://static.zentao.net/web/data/source/zentao/default/wide/contact-limu.webp',
                'alt': '李木'
            });

            $('#contactPopover').find('.sales-introduction-image img.sales-qrcode').attr({
                'src': 'https://static.zentao.net/web/data/source/zentao/default/wide/contact-limu-qrcode.webp',
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
});$('.fullScreen-book .fullScreen-catalog .panel-heading').insertAfter('.fullScreen-book .fullScreen-header > #siteLogo');
$('.fullScreen-book .fullScreen-header .title').insertBefore('.fullScreen-book .fullScreen-header .dropdown');
$('.fullScreen-book').parent().addClass('wide-screen');
$('.fullScreen-book .fullScreen-header .book-search .form-control').attr('placeholder','搜索');
$('iframe').wrap('<div class="iframe-box"></div>');
$('.bookScrollListsBox .dropdown').click(function(){
    if(!$(this).hasClass('open')) {
        $(this).parent().siblings('.panel-body').css({'minHeight': $(this).find('.dropdown-menu').height() + 20 + 'px'})
    } else {
        $(this).parent().siblings('.panel-body').css({'minHeight': 0})
    }
})

var windowScrollHeight = window.innerHeight;
var minScrollHeight = windowScrollHeight - $('#header').height() - $('#footer').height() - 54;
if($('.page-wrapper').height() < minScrollHeight) {
    $('.page-wrapper').css('minHeight', minScrollHeight)
}

if(window.innerWidth < 1100) {
    setTimeout(() => {
        $('.chapter').removeClass('opened').addClass('closed');
    }, 500);
}
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
;v.messageUrl = "\/message-comment-book-617.html";;
    $('#commentBox').load(v.messageUrl);
;v.status = "normal";