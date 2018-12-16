using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Controls
{
	public interface IWindow : IContainerControl
	{
		int left { get; }
		int top { get; }
		int width { get; }
		int height { get; }

		int titleWidth { get; }
		int titleHeight { get; }
		int clientAreaWidth { get; }
		int clientAreaHeight { get; }

		void show(IWindowDisplayOptions options = null);
		void showModal();
		void close(string dialogResult = null);
		void dock(object divSelector);
		void undock();

		void closing();
		void closed();
	}
}
