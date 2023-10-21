const posts = new Promise((resolve, reject) => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => {
			if (!response.ok) {
				throw new Error('Error');
			}
			return response.json();
		})
		.then(data => {
			resolve(data);
		})
		.catch(error => {
			reject(error);
		});
});

posts
	.then(data => {
		console.log(data);
		
		const domElementInput = document.getElementById('get-post');
		
		const domElementPost = document.getElementById('post');
		const domElementId = document.getElementById('post-id');
		const domElementTitle = document.getElementById('post-title');
		const domElementBtn = document.getElementById('post-show');
		const domElementComment = document.getElementById('post-comment');
		const domElementValidatorError = document.getElementById('validator-error');
		
		const dataIdSet = new Set(data.map(item => item.id));

		domElementInput.addEventListener('input', (event) => {
			const inputNumber = Number(event.target.value);
			
			if(dataIdSet.has(inputNumber)) {
				domElementPost.classList.remove('hide');
				domElementBtn.classList.remove('hide');
				domElementComment.classList.add('hide');
				
				domElementId.textContent = `#${data[inputNumber - 1].id}`;
				domElementTitle.textContent = `Title: ${data[inputNumber - 1].title}`;
				domElementComment.textContent = `Comment: ${data[inputNumber - 1].body}`;
				domElementValidatorError.textContent = '';
				
			} else {
				domElementPost.classList.add('hide');
				
				domElementId.textContent = '';
				domElementTitle.textContent = '';
				domElementValidatorError.textContent = `${inputNumber} is wrong number`
			}
		});
		
		domElementBtn.addEventListener('click', () => {
			domElementBtn.classList.add('hide');
			domElementComment.classList.remove('hide');
		});
		
	})
	.catch(error => {
		console.error('Error:', error);
	});