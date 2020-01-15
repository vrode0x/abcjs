# Tune Book

The following analysis is based on the abc string that is in the textarea at the bottom of this page.

## Number of Tunes

It might be useful to know in advance how many tunes are in a tunebook before rendering them:

<num-tunes ref="numTunes"></num-tunes>

## Get Tune Info

The following assumes you've created a `TuneBook` object like this: 

```
var tunebook = ABCJS.TuneBook(tunebookString);
```

### Extract Tune by ID

If you know the ID, then you can use the following to get a particular tune in a tunebook. The id is the value in the `X:` field.

<tune-book-info ref="tuneById" type="id"></tune-book-info>

### Extract Tune by Title

If you know the title, then you can use the following to get a particular tune in a tunebook. The title is the value in the *first* `T:` field.

<tune-book-info ref="tuneByTitle" type="title"></tune-book-info>

### Get all Tune Info

You can directly access the array of tunes in a tune book with:

```javascript
var arrayOfTunes = tunebook.tunes;
```

## Test Data

Paste in any ABC you want here and see how that affects the analysis above:

<example-tune-book :callbacks="callbacks"></example-tune-book>

<script>
	export default {
		mounted() {
			setTimeout(() => {
				this.callbacks = [this.$refs.numTunes, this.$refs.tuneById, this.$refs.tuneByTitle];
			}, 500);
		},
		data() {
			return {
				callbacks: [],
			};
		},
	}
</script>
