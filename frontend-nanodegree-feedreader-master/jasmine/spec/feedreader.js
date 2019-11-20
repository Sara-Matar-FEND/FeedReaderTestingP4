
$(function() 
{
    ////////////////////////////Test(1)//////////////////////////////
    describe('RSS Feeds', function()
    { 
        it('are defined', function() 
        {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
    ////////////////////////////Test(2)//////////////////////////////
        it('it has a URL defined and is not empty ', function()
        {
            allFeeds.forEach(feed => 
            {
                expect(feed.hasOwnProperty('url')).toBe(true);//it has a URL defined
                expect(feed.url).not.toBe('');//URL is not empty.
            }) 
        });
    ////////////////////////////Test(3)//////////////////////////////
        it('it has a name defined and is not empty ', function()
        {
            allFeeds.forEach(feed => 
            {
                expect(feed.hasOwnProperty('name')).toBe(true);//it has a URL defined
                expect(feed.name).not.toBe('');//URL is not empty.
            }) 
        });
    });
    ////////////////////////////Test(4)//////////////////////////////
    describe("The menu",function()
    {
        //var declaration 
        let body = $('.menu-hidden');
        let menuButton = $('.menu-icon-link');

        it("element is hidden by default",function()
            {
            expect(body.hasClass('menu-hidden')).toBe(true); 
            })
      ///////////////////////////Test(5)//////////////////////////////
        it("changes visibility when is clicked",function()
            {
            let oldclass = document.body.className;
            
            menuButton.click();
            let newclass = document.body.className;
            expect(newclass).not.toBe(oldclass);

            menuButton.click();//click again 
            expect(oldclass).not.toBe(newclass);
            })
            })
     ////////////////////////////Test(6)//////////////////////////////
    describe("Initial Entries",function()
    {
        beforeEach(function(done)
        {
        loadFeed(1,function()
        { 
         done();
        });
        })
        it("it,s at least a single .entry element within the .feed container",function (done)
            {
                expect($(".feed .entry").length).toBeGreaterThan(0);
                done();
            })
    });
    ////////////////////////////Test(7)//////////////////////////////
    describe("New Feed Selection",function()
    {
        //intal var to use for comparison if content change or not 
        let FirstFeed;
        let SecFeed;
        beforeEach(function(done)//chec
        {
            loadFeed(0,function()
            { FirstFeed =$('.feed').html();
            loadFeed(1,function()
            { SecFeed=$('.feed').html();
                done();
             });
           });
        });
        it(" changes the content ",function(done)
            {
                //if false that mean the content has been change
                expect(FirstFeed === SecFeed).not.toBe(true);
                done();
            })
    })
}());

