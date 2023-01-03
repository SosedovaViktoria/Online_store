import Navigo from 'navigo';

const router = new Navigo('/', { hash: true });

router
    .on(
        {'*':
            function () {
                document.body.innerHTML = "<a href='my' data-navigo>main</a>"
            }
        },
        {'my': function () {
                document.body.innerHTML = "<a href='/' data-navigo>hello</a>"
            }
        },
        {'let':
            function () {
                document.body.innerHTML = "<a href='let' data-navigo>aaaaa</a>"
            }
        },
)
.resolve();

//router.navigate('/');

router.notFound(() => {
    document.body.innerHTML = "404"
})