export default {
	title: "Ziglang, another way to create a binary search tree",
	description:
		"This article explores the unique features and advantages of Ziglang in the context of binary search trees",
	keywords: [
		"zig",
		"ziglang",
		"compiler",
		"programming",
		"code",
		"computing",
		"execute",
		"linux",
		"windows",
		"mac",
		"binary",
		"tree",
		"search",
		"struct"
	],
	date: "2023-10-23",
	api_url: "https://api.github.com/repos/rafaelbm9126/binary-search-tree",
	repo_url: "//github.com/rafaelbm9126/binary-search-tree",
	path: "zig-simple-binary-search-tree",
	code: [
		{
			language: "zig",
			text: `
        const Node = struct {
          data: usize,
          left: ?*Node,
          right: ?*Node,
        };
      `
		},
		{
			language: "zig",
			text: `
        var arena = std.heap.ArenaAllocator.init(std.heap.page_allocator);
        defer arena.deinit();
        const allocator = arena.allocator();
      `
		},
		{
			language: "zig",
			text: `
        fn insertNode(allocator: Allocator, node: *?*Node, data: usize) !void {
            const tmp: *Node = try allocator.create(Node);
            var new = Node{
                .data = data,
                .left = null,
                .right = null,
            };
            tmp.* = new;
        
            if (node.* == null) {
                node.* = tmp;
            } else {
                if (data > node.*.?.data) {
                    try insertNode(allocator, &node.*.?.right, data);
                } else if (data < node.*.?.data) {
                    try insertNode(allocator, &node.*.?.left, data);
                }
            }
        }
      `
		},
		{
			language: "zig",
			text: `
        fn PrintPreOrder(node: ?*Node) void {
            if (node != null) {
                print("PrintPreOrder: {d}", .{node.?.data});
                PrintPreOrder(node.?.left);
                PrintPreOrder(node.?.right);
            }
        }
      `
		},
		{
			language: "zig",
			text: `
        fn PrintInOrder(node: ?*Node) void {
            if (node != null) {
                PrintInOrder(node.?.left);
                print("PrintInOrder: {d}", .{node.?.data});
                PrintInOrder(node.?.right);
            }
        }
      `
		},
		{
			language: "zig",
			text: `
        fn PrintPostOrder(node: ?*Node) void {
            if (node != null) {
                PrintPostOrder(node.?.left);
                PrintPostOrder(node.?.right);
                print("PrintPostOrder: {d}", .{node.?.data});
            }
        }
      `
		},
		{
			language: "zig",
			text: `
        pub fn main() !void {
            // ******* //
            var arena = std.heap.ArenaAllocator.init(std.heap.page_allocator);
            defer arena.deinit();
            const allocator = arena.allocator();
            // ******* //
            var node: ?*Node = null;
            // ******* //

            var vector = [_]usize{ 40, 20, 10, 30, 60, 50, 70, 5, 15, 25, 35, 45, 55, 65, 75 };

            for (0..MAX_LENGTH_ITEMS) |i| {
                try insertNode(allocator, &node, vector[i]);
            }

            PrintPreOrder(node);
            PrintInOrder(node);
            PrintPostOrder(node);
        }
      `
		}
	]
};
