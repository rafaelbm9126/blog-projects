type DataTag = {
	[key: string]: {
		visible: boolean;
		reference: string;
	};
};

const data: DataTag = {
	ziglang: {
		visible: true,
		reference: ''
	},
	compiler: {
		visible: false,
		reference: ''
	},
	zig: {
		visible: false,
		reference: 'ziglang'
	},
	programming: {
		visible: false,
		reference: ''
	},
	code: {
		visible: false,
		reference: ''
	},
	computing: {
		visible: false,
		reference: ''
	},
	execute: {
		visible: false,
		reference: ''
	},
	linux: {
		visible: false,
		reference: ''
	},
	windows: {
		visible: false,
		reference: ''
	},
	mac: {
		visible: false,
		reference: ''
	},
	cpp: {
		visible: true,
		reference: ''
	},
	'c++': {
		visible: false,
		reference: 'cpp'
	},
	c: {
		visible: true,
		reference: ''
	},
	clang: {
		visible: false,
		reference: 'c'
	},
	stack: {
		visible: false,
		reference: ''
	},
	lifo: {
		visible: false,
		reference: ''
	},
	binary: {
		visible: false,
		reference: ''
	},
	tree: {
		visible: false,
		reference: ''
	},
	search: {
		visible: false,
		reference: ''
	},
	struct: {
		visible: true,
		reference: ''
	}
};

export default data;
