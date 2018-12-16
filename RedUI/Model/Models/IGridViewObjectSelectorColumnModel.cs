using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
	public interface IGridViewObjectSelectorColumnModel : IGridViewColumnModel
	{
		string getObjectFunction { get; }
		string objectValueProperty { get; }
		bool isRequired { get; }
		bool isEditable { get; }
		string validationErrorMessage { get; }
	}
}
