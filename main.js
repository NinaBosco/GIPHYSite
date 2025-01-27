const searchForm = document.getElementById('search-form')
        const searchInput = document.getElementById('search-input')
        const resultsEl = document.getElementById('results')

        searchForm.addEventListener('submit' , function(e) {
            e.preventDefault()
            const q = searchInput.value
            search(q)
        })
        function search (q){
            const apikey = `qwgCqURNholM2s1hfigvOsRlqoDw10XI`
            const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`

            fetch(path).then(function(res) { 
            return res.json() 
            }).then(function(json){
                console.log(json.data[0].images.fixed_width.url)
                let resultsHTML =''

                json.data.forEach(function(obj){
                    console.log(obj)
                    
                    const url = obj.images.fixed_width.url
                    const title = obj.title

                    resultsHTML +=`<img 
                    src="${url}" 
                    alt="${title}"
                    >`
                })
                resultsEl.innerHTML = resultsHTML
            }).catch(function(err){
                console.log(err.message)
            })
        }
        