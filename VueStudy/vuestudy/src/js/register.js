//创建一个局部组件
const registerForm = {
	//在组件内的template只能有一个根标签
	template:`	
		<div>
			<h1>注册页</h1>
			用户名： <input type="text" />
			密码：	<input type="password" />
			确认密码: <input type="password" />
			<input type="button" value="注册" />
		</div>
	`
}