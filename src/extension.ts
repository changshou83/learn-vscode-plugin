import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let helloworld = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		vscode.window.showErrorMessage('Hello World from HelloVSCode!');
	});
	let currentTime = vscode.commands.registerCommand('helloworld.currentTime', () => {
		const date = new Date()
		vscode.window.showInformationMessage(date.toLocaleTimeString());
	});

	context.subscriptions.push(helloworld, currentTime);
}

export function deactivate() {}
